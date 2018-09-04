<template>
    <div class="artist__about" v-if="dados.length != 0">
        <!-- <About :imageUrl="imageUrl" v-bind:name="dados.desc"></About> -->
        <Lyrics v-bind:musics="dados.lyrics.item" v-bind:top="dados.toplyrics.item"></Lyrics>
    </div>
</template>

<script>
    import About from '@/components/artist/About.vue'
    import Lyrics from '@/components/artist/Lyrics.vue'
    
    export default {
        name: "SearchResult",
        props: ['dados', 'imageUrl'],
        components: {
            About,
            Lyrics
        }
    }
</script>
<style scoped>
</style>