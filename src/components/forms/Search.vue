<template>
  <div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="field">
          <label class="label">Nome do artista:</label>
          <div class="control">
            <input class="input" v-model.lazy="nameArtist" type="text" placeholder="Digite o nome do artista">
            <button v-on:click="FilterArtist()">Buscar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column items">
        {{dados.url}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Search',
    data(){
      return{
        nameArtist: "",
        dados: []
      }
    },
    methods:{
      FilterArtist(){
        this.$http.get('https://www.vagalume.com.br/' + this.$options.filters.TrimReplace(this.nameArtist) + '/index.js').then(response => {
            this.dados = response.body.artist;
            console.log(response.body)
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
