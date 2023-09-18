<template>
    <div v-if="isProfileEnabled">
        <div><p>Username:</p></div>
        hi {{ username }}
    </div>
    <!-- navbar -->
    <p>Choose what part of this page you want to see:</p>
    <!-- links to view and create listings pages V -->
    <router-link to="/view">View Listings</router-link>
    <br />
    <router-link to="/create">Create Listings</router-link><br />
    <br />
    <div v-if="isProfileEnabled">
        <button onclick="sessionStorage.clear(); location.href='/view'">
            Logout
        </button>
    </div>
    <div v-if="!isProfileEnabled">
        <button onclick="location.href='/login'">Login</button>
    </div>

    <hr />

    <!-- the page returned from the links in the navbar V -->
    <router-view />
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

// export default {
//     data() {
//         return {
//             activeComp: "",
//         };
//     },
// };
const username = ref("");
const isProfileEnabled = ref(false);

onBeforeMount(() => {
    username.value = sessionStorage.getItem("username");
    console.log(sessionStorage.getItem("username"));
    if (username.value != undefined) {
        isProfileEnabled.value = true;
    }
});

// if (sessionStorage) {
//     onMounted(() => {
//         // the DOM element will be assigned to the ref after initial render
//         document.getElementById("username").innerHTML = sessionStorage.getItem('username') // <div>This is a root element</div>
//       })
//       console.log(sessionStorage.getItem('username'));
// }
</script>

<style scoped>
@import './assets/styles/App.css'
</style>
