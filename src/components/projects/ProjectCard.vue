<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 250);
            return abstract + '...';
        },
        pubblicationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
};
</script>

<template>
    <div class="card mt-3 mb-5">
        <div class="card-header">
            <h2>{{ project.title }}</h2>
        </div>
        <div class="card-body">
            <p>{{ abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            {{ pubblicationDate }}
        </div>
    </div>
</template>

<style scoped></style>