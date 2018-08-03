<template>
    <div class="artist__lyrics">
        <div class="columns">
            <div class="column is-9">
                <!-- <h2>Letras {{musics.length}}</h2> -->
                <h2>Letras</h2>
                <table class="table is-striped">
                    <tbody>
                        <tr v-for="item in musics" :key="item.id">
                            <td>
                                <a :href="item.url">{{item.desc}}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="column is-3">
                <TopLyrics v-bind:topmusics="top"></TopLyrics>
            </div>
        </div>
    </div>
</template>
<script>
    import TopLyrics from './TopLyrics.vue'

    export default {
        name: 'Lyrics',
        props: ['musics', 'top'],
        components:{
            TopLyrics
        }
    }
</script>
