<script>
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
export default {
    name: 'ProjectList',
    components: {
    ProjectCard,
},
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProjects(gotoPage) {
            axios.get(`${this.store.baseUrl}/api/projects`,
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
    <h2 class="text-center">Elenco dei progetti</h2>
    <div class="row ">
        <div class="col-4" v-for="project in projects">
            <ProjectCard :project="project"  :key="project.id" />
        </div>
        <nav aria-label="Page navigation example py-4 ">
        <ul class="pagination d-flex justify-content-center">
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
            <li class="page-item" v-for="page in lastPage" :class="{'active' : page==currentPage}"><button class="page-link" @click="getProjects(page)">{{ page }}</button></li>
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage +1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
        </ul>
    </nav>
    </div>
   
       
</div>


   

</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>