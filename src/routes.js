import Home from './components/pages/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Inicio' },
    { path: '/artista/:id', name: 'artista'}
];