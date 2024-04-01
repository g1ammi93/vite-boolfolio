<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else>Non ci sono post</h4>
    </section>
</template>

<style scoped></style>