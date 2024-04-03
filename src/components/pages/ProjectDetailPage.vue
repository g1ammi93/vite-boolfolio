<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        error: null
    }),
    methods: {
        getProject() {
            axios.get(defaultEndpoint + this.$route.params.slug)
                .then(res => { this.project = res.data; })
                .catch(err => { console.error(err.message) })
                .then()
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <ProjectCard v-if="project" :project="project" :isDetail="true" />
</template>

<style scoped></style>