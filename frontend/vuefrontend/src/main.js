import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ViewListings from './components/ViewListings.vue'
import CreateListings from './components/CreateListings.vue'
import ViewListing from './components/ViewListing.vue'
import DeleteListing from './components/DeleteListing.vue'
import UpdateListing from './components/UpdateListing.vue'
import CreateComment from './components/CreateComment.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/view', name: 'ViewListings', component: ViewListings },
        { path: '/create', name: CreateListings, component: CreateListings },
        { path: '/view/:id', name: 'ViewListing', component: ViewListing },
        { path: '/delete/:id', name: 'DeleteListing', component: DeleteListing },
        { path: '/update/:id', name: 'UpdateListing', component: UpdateListing },
        { path: '/comment/:id', name: CreateComment, component: CreateComment },

    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')