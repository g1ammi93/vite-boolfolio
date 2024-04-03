<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h3 class="text-white">404 | Page Not Found</h3>
        <button class="btn btn-secondary" @click="$router.back()">Torna Indietro</button>
    </div>
</template>

<style scoped></style>