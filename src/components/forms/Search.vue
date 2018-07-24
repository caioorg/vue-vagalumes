<template>
  <div id="main">
    
    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <label class="label">Nome do artista:</label>
          <div class="control">
            <input class="input" v-model.lazy="nameArtist" type="text" placeholder="Digite o nome do artista">
            <button v-on:click="FilterArtist()">Buscar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="Artist">
      <About v-bind:description="dados"></About>
    </div>

  </div>
</template>

<script>

  import About from '../artist/About.vue'

  export default {
    name: 'Search',
    data(){
      return{
        nameArtist: "",
        dados: []
      }
    },
    components: {
      About
    },
    methods:{
      FilterArtist(){
        this.$http.get(this.$baseUrl + '/' + this.$options.filters.TrimReplace(this.nameArtist) + '/index.js').then(response => {
            this.dados = response.body.artist;
            this.nameArtist = '';
        }, error =>{
          console.log(error);
        });
      }
    },
    filters:{
      TrimReplace: (value) =>{        
        return value.trim().split(" ").join("-").toLowerCase()
      }
    }
  }
</script>
