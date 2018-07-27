<template>
  <div class="artist">
    
    <div class="search-artist">
      <div class="columns">
        <div class="column column is-6 is-offset-3">
          <div class="field has-addons">
            <div class="control">
              <input class="input is-medium" v-model.lazy="nameArtist" type="text" placeholder="Digite o nome do artista">
            </div>
            <div class="control">
              <button class="button button--success is-medium is-link" v-on:click="FilterArtist()">Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="artist__about" v-if="dados.length != 0">
      <About v-bind:image="dados.pic_medium" v-bind:name="dados.desc"></About>
      <Lyrics v-bind:musics="dados.lyrics.item"></Lyrics>
    </div>
    

  </div>
</template>

<script>

  import About from '../artist/About.vue'
  import Lyrics from '../artist/Lyrics.vue'

  export default {
    name: 'Search',
    data(){
      return{
        nameArtist: "",
        dados: []
      }
    },
    components: {
      About,
      Lyrics
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
