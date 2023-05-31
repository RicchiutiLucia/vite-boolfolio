<script>
 import { store } from '../store.js';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div class="card">
        <img v-if="project.url" :src="`${this.store.baseUrl}/storage/${project.url}`" class="card-img-top">
        <img v-else src="../../public/NotFound.jpg" class="card-img-top"/>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <h6>Tipo: {{project.type?.name}}</h6>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="btn btn-primary">Leggi di più</a>
    </div>
   
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>