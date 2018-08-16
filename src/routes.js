import Home from './components/pages/Home.vue';
import Music from '@/components/artist/Music';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Inicio' },
    { path: '/artista/:id', name: 'artista', component: Music }
];
