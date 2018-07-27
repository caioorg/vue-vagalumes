<template>
    <div class="columns">
        <div class="column is-3">
            <div class="artist__about--image">
                <img v-bind:src="this.$baseUrl + image" alt=""> 
            </div>
        </div>
        <div class="column is-9">
            <div class="artist__descriptions is-flex">
                <p class="artist__descriptions--name">
                    <span> Nome: </span> {{name}}
                </p>
                <p class="artist__descriptions--genrer"></p>
            </div>  
        </div>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: ['image','name'],
    }
</script>
