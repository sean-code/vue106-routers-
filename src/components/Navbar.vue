<template>
    <div class="nav">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link :to='{ name: "contact" }'>Contact</router-link> |
            <router-link :to='{ name: "jobs" }'>Jobs</router-link>
        </nav>
        <button @click="redirect">Redirect</button>
        <button @click="goBack">Go back</button>
        <button @click="goForward">Go forward</button>

        <router-view/>
    </div>
</template>


<script>
export default{
    methods:{
        redirect(){
            // console.log("Redirect")
            this.$router.push({name: 'home'})
        },
        goBack() {
            // console.log("Go Back")
            this.$router.go(-1)
        },
        goForward(){
            // console.log("Go Forward")
            this.$router.go(+1)
        }
    }
}

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
    button{
        margin: 0 10px;
        padding: 10px;
        border: none;
        border-radius: 4px;
    }

</style>