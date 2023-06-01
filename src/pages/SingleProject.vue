<template>
    <main>
        <div class="container">
            <div class="row m-5">
            <div class="card p-0" v-if="project">
                
                <img v-if="project.url" :src="`${this.store.baseUrl}/storage/${this.project.url}`" class="img-fluid" :alt="`${this.project.title}`">
                <img v-else src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" class="img-fluid" alt="Placeholder Image">
                
                <div class="card-body">
                    <h5 class="card-title">{{this.project.title}}</h5>
                    <p class="card-text ">Descrizione : <br>
                        {{this.project.description}}
                    </p>
                    <div class="card-text ">Tipologia : <br>
                        <p v-if="project.type">{{this.project.type?.name}}</p>
                        <p v-else>Nessuna tipologia assegnata</p>
                    </div>
                    <span >Tecnologia :</span>
                    <div v-if="project.technologies && project.technologies.length > 0">
                        <span v-for="(technology,index) in this.project.technologies"  class="badge rounded-pill text-bg-primary">
                            {{ technology.name }}<span v-if="index < project.technologies.length - 1"></span>
                        </span>
                    </div>
                    <p v-else>Nessuna tecnologia assegnata</p>

                </div>
            </div>
        </div>

        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleProject',
        data() {
            return {
                store,
                project: null
            }
        },
        created() {
            const slug = this.$route.params.slug;
            
            console.log(slug);

            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                if(response.data.success){
                    this.project = response.data.project;
                }else{
                    this.$router.push({ name: "not-found" });
                }
            });

        }
    }
</script>