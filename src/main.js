// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'
import Home from './components/HomePage.vue'
import About from './components/AboutPage.vue'
import Service from './components/ServicePage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
        { path: '/Home', component: Home },
        { path: '/About', component: About },
        { path: '/Service', component: Service },
    ]
});

const app = createApp(App)

app.use(router);
app.component('food-items', FoodItems);
app.component('animal-collection', AnimalCollection);
app.component('Home', Home);
app.component('About', About);
app.component('Service', Service);

app.mount('#app')
