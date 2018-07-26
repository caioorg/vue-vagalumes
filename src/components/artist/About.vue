<template>
    <div class="columns Artist--about">
        {{description.url}}
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: ['description'],
        data(){
            return{
                
            }
        }

    }
</script>
