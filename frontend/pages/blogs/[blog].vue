<template>
  <div>
    <p>This is a rote pages {{ blog }}</p>
  </div>
</template>

<script setup>
const { blog } = useRoute().params
</script>

<style scoped>

</style>