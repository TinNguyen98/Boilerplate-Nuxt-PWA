<template>
  <footer v-text="$t('footer')" />
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding: 15px;
  background-color: #3d4347;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
}
</style>
