<template>
    <main>
        <div class="container">

            <h1 class="mt-3 text-center">{{ project.title }}</h1>
            <p><span  class="fw-bold">Descrizione:</span><br>{{ project.description }}</p>
            <p class="card-text"><span class="fw-bold">Categoria:</span> <br>{{project.type?project.type.name:'Nessuna Categoria abbinata'}}</p>
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
                project: {}
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