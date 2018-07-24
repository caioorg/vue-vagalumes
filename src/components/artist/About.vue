<template>
    <div class="columns Artist--about">
        <div class="column">
            <img v-bind:src="this.$baseUrl + description.pic_medium" alt="">
        </div>
        <div class="column">
            Artista: {{description.desc}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: ['description'],
        data(){
            return{
                image: this.$baseUrl + this.description.pic_medium
            }
        }

    }
</script>
