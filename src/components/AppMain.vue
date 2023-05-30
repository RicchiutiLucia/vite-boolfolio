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
            contentMaxLength: 200,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.BaseUrl}/api/projects`)
            .then(response => {
                console.log(response);
                this.projects = response.data.results;
            });
           
        }
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
    </div>
</div>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>