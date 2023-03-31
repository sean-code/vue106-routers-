<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to='{ name: "contact" }'>Contact</router-link> |
        <router-link :to='{ name: "jobs" }'>Jobs</router-link>
    </nav>
    <router-view/>
</template>


<script>

</script>


<style>
    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    }

    nav a.router-link-exact-active {
    color: white;
    background: crimson;
    }
</style>