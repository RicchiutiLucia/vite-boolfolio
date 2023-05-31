
<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BoolFolio - Front</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="(navItem, index) in navigation" :key="index">
                    <router-link :to="{ name: navItem.routeName }" class="nav-link" aria-current="page">{{
                        navItem.label
                    }}</router-link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navigation: [
                {
                    label: 'Home',
                    routeName: 'home'
                },{
                    label: 'Progetti',
                    routeName: 'project'
                },
                {
                    label: 'About us',
                    routeName: 'about us'
                },
                {
                    label: 'Contact us',
                    routeName: 'contact'
                },
                

              ]
        }
    }
}
</script>



