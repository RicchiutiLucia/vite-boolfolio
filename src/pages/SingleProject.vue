<template>
    <h1>Questo è un progetto singolo</h1>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleProject',
        data() {
            return {
                store
            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            
            console.log(slug);

            axios.get(`${this.store.baseUrl}/api/post/${slug}`)
            .then(response => {
                console.log(response);
            });

        }
    }
</script>