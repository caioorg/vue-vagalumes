<template>
    <div class="artist">
        <div class="search-artist">
            <div class="columns">
                <div class="column column is-6 is-offset-3">
                    <div class="field has-addons">
                        <form v-on:submit.prevent="FilterArtist()">
                            <div class="control">
                                <input class="input is-medium" v-model.lazy="nameArtist" type="text" placeholder="Digite o nome do artista">
                            </div>
                            <div class="control">
                                <button class="button button--success is-medium is-link">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <SearchResult :dados="dados" :imageUrl="getImageUrl()" />
        <!-- <SearchResult :dados="dados" /> -->
  </div>
</template>

<script>
    import SearchResult from '@/components/search-result'
    import { get, endpoint } from '@/services'
    
    export default {
        name: 'Search',
    
        data(){
            return{
                nameArtist: "",
                dados: []
            }
        },

        components: {
            SearchResult
        },
        
        methods: {
            getImageUrl () {
                return `${endpoint}/${this.dados.pic_medium}`
            },

            FilterArtist () {

                const filteredString = this.$options.filters.TrimReplace(this.nameArtist)
                const url = `${filteredString}/index.js`
                
                get(url)
                    .then((response) => {
                        console.log('caio')
                        this.dados = response.artist
                        this.nameArtist = ''
                })
                .catch ((error) => {
                    console.log(error)
                })
            }
        },
        
        filters: {
            TrimReplace: (value) => {
                return value.trim().split(" ").join("-").toLowerCase()
            }
        }
    }
</script>