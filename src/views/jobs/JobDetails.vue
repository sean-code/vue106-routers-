<template>
    <div v-if="job">
      <h1>Job Details Page</h1>
      <p>The Job ID is {{ id }}</p>
      <p>The Job Title is {{ job.title }}</p>
      <p>Lorem ipsum dolor sit. {{ job.details }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        job: null,
      };
    },
    mounted() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then((response) => response.json())
        .then((data) => (this.job = data))
        .catch((err) => console.log(err.message));
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  