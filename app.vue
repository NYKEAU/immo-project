<template>
  <div class="home">
    <NuxtLayout>
      <NuxtPage />
      <h1>Annonces immobilières</h1>
      <p>Trouver votre futur chez vous dès aujourd'hui!</p>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
