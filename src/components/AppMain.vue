<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
export default {
    name: 'AppMain',
    components: {
    ProjectCard,
},
    data() {
        return {
            BaseUrl: "http://127.0.0.1:8000",
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProjects(gotoPage) {
            axios.get(`${this.BaseUrl}/api/projects`,
                {
                    params :{
                        page: gotoPage
                    }
                }
            )
            .then(response => {
                console.log(response);
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            });
           
        }
    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<template>
<div class="container">
    <h2 class="text-center">I nostri progetti</h2>
    <div class="row ">
        <div class="col-4" v-for="project in projects">
            <ProjectCard :project="project"  :key="project.id" />
        </div>
        <nav aria-label="Page navigation example py-4 ">
        <ul class="pagination d-flex justify-content-center">
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
        </ul>
    </nav>
    </div>
   
       
</div>


   

</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>