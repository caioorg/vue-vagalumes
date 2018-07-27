<template>
    <div class="artist__lyrics">
        <div class="columns">
            <div class="column is-half is-9">
                <h2>Letras {{musics.length}}</h2>
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
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Lyrics',
        props: ['musics']
    }
</script>
