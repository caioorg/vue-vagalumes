<template>
    <div class="columns">
        <div class="column is-3">
            <div class="artist__about--image">
                <img v-bind:src="imageUrl"> 
            </div>
        </div>
        <div class="column is-9">
            <div class="artist__descriptions is-flex">                
                <p class="artist__descriptions--name">
                    <span> Nome: </span> {{name}}
                </p>
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
        }
    }
</script>
