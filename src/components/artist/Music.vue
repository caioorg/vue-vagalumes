<template>
    <h1>ROTA DE MUSICA</h1>
</template>

<script>
export default {
  name: 'Music',
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>
