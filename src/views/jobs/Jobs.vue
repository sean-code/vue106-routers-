<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <h3>{{ job.title }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jobs: [
          { title: "Software Developer", id: 1, details: "lorem" },
          { title: "Ninja Web developer", id: 2, details: "ipsum" },
          { title: "Ninja Vue Developer", id: 3, details: "lorem lorem" },
        ],
      };
    },
  };
  </script>
  
  <style scoped></style>
  