<template>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="field">
          <label class="label">Nome do artista:</label>
          <div class="control">
            <input class="input" v-model="nameArtist" type="text" placeholder="Digite o nome do artista">
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'Search',
    data(){
      return{
        nameArtist: ""
      }
    },
    methods:{
      
    },
    filters:{
      TrimReplace: (value) =>{        
        return value.trim().split(" ").join("-").toLowerCase()
      }
    }
  }
</script>
