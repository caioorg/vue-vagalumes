<template>
  <div class="container">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>

  import Header from '../layouts/Header'
  import Content from '../layouts/Content'


  export default {
    name: 'Home',
    components: {
      Header,
      Content
    }
  }
</script>
