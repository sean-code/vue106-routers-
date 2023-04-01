<template>
    <h1>Job Details Page</h1>
    <p>The Job ID is {{ id }}</p>
</template>



<script>
    export default{
        props: ['id'],
        data(){
            return{
              id: this.$route.params.id,
              details: this.$route.params.details

            }
        }

    }

</script>


<style scoped>

</style>