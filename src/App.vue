<script>
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/projects/'
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container pt-4">
    <h1>Boolfolio</h1>
    <ProjectList :projects="projects" />
  </main>
</template>

<style scoped></style>
