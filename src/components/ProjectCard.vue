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
    <div class="container">
        
            <div class="card">
                <img v-if="project.url" :src="`${this.store.baseUrl}/storage/${project.url}`" class="card-img-top w-50 mx-auto">
                <img v-else src="../../public/NotFound.jpg" class="card-img-top"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <h6>Tipo: {{project.type?.name}}</h6>
                <p class="card-text">{{ project.description }}</p>
            <div class="pb-3 ">
                <p>Tecnologie:</p>
                <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-primary me-3">{{technology.name}}</span>
            </div>

            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">
                Leggi di più
            </router-link>
        

        </div>
        
            
    </div>
   

   
    
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>