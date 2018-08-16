<template>
    <div class="columns">
        <div class="column is-3">
            <div class="artist__about--image">
                <img v-bind:src="imageUrl" alt="">
            </div>
        </div>
        <div class="column is-9">
            <div class="artist__descriptions is-flex">
              <router-link :to="`/artista/${name}`">
                <p class="artist__descriptions--name">
                    <span> Nome: </span> {{name}}
                </p>
              </router-link>

                <p class="artist__descriptions--genrer"></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: {
          imageUrl: {
            type: String,
            required: true
          },
          name: {
            type: String,
            required: true
          }
        },
    }
</script>
