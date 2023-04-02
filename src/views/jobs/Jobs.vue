<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id">
          <router-link :to="{ name: 'JobDetails', params: {id: job.id} }" class="jobs-link">
              <h3>{{ job.title }}</h3>
          </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading the jobs please...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // jobs: [
        //   { title: "Software Developer", id: 1, details: "lorem" },
        //   { title: "Ninja Web developer", id: 2, details: "ipsum" },
        //   { title: "Ninja Vue Developer", id: 3, details: "lorem lorem" },
        // ],
        jobs: []
      }
    },
    mounted(){
      fetch('http://localhost:3000/jobs')
        .then((response) => response.json())
        .then((data) => this.jobs = data)
        .catch( err => console.log(err.message))
    }
  };
  </script>
  
<style scoped>
.jobs-link{
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
}

</style>
  