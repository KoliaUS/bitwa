<template>
    <nav class="navbar bg-dark navbar-expand-lg navbar-dark fixed-top " id="mainNav">
        <div class="container px-4 px-lg-5">
            <router-link class="navbar-brand text-center$ git config --global user.name " to="/">My Awesome Blog</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <em class="bi-list"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link px-lg-1 py-3 py-lg-4" to="/">
                            <em class="bi-house"/>
                            Home
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link px-lg-1 py-3 py-lg-4" to="/about">
                            <em class="bi-newspaper"/>
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-lg-1 py-3 py-lg-4" to="/new-article">
                            <em class="bi-plus-circle"/>
                            NEW
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>

</style>
