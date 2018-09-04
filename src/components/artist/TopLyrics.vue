<template>
    <div>
        <h2>Top 10 do artista</h2>
        <table class="table is-striped">
            <tbody>
                <tr v-for="item in topmusics.slice(0,10)" :key="item.id">
                    <td>
                        {{item.desc}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TopLyrics",
        props: ["topmusics"]
    }
</script>