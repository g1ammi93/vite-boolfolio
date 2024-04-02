<script>
import ProjectList from '../projects/ProjectList.vue';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/projects/'
export default {
    name: 'Boolfolio',
    components: { ProjectList },
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
    <h1>Boolfolio</h1>
    <ProjectList :projects="projects" />

</template>

<style scoped></style>