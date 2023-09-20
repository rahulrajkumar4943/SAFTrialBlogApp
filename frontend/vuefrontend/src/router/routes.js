import ViewListings from '../components/ViewListings.vue'
import CreateListings from '../components/CreateListings.vue'
import ViewListing from '../components/ViewListing.vue'
import DeleteListing from '../components/DeleteListing.vue'
import UpdateListing from '../components/UpdateListing.vue'
import CreateComment from '../components/CreateComment.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import HamburgerPage from '../components/HamburgerPage.vue'

const routes = [
    { path: '/view', name: 'ViewListings', component: ViewListings },
    { path: '/create', name: 'CreateListings', component: CreateListings },
    { path: '/view/:id', name: 'ViewListing', component: ViewListing },
    { path: '/delete/:id', name: 'DeleteListing', component: DeleteListing },
    { path: '/update/:id', name: 'UpdateListing', component: UpdateListing },
    { path: '/comment/:id', name: 'CreateComment', component: CreateComment },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/register', name: 'RegisterPage', component: RegisterPage },
    { path: '/hamburger', name: 'HamburgerPage', component: HamburgerPage },
    // redirect the / to /view
    { path: '/', redirect: '/view' },


]

export default routes;