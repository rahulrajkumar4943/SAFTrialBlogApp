
<template>
    <!-- navbar -->
    <!-- the navbar is in app.vue because this template is always loaded -->
    <!-- the other templates are loaded uner the <router-view /> tag -->
    <div class="navbar">
        <router-link to="/view" class="logo" onclick="">Blog App</router-link>
        <!-- links to view and create listings pages V -->

        <div class="navbarlinks">
            <router-link to="/view" class="navbarlink">View Listings</router-link>
            <br />
            <router-link to="/create" class="navbarlink">Create Listings</router-link>
            <br />
            <br />
        </div>

        <div v-if="isProfileEnabled" class="navbarusername">
            {{ username }}
        </div>

        <div class="loginout">
            <!-- log in and log out buttons -->
            <div v-if="isProfileEnabled">

                <!-- check if the user is logged in or out but checking if the session exists -->
                <!-- if the session exists then the user is logged in -->
                <!-- only show the log out button if the user is logged in -->
                <button onclick="sessionStorage.clear(); location.href='/view'" class="loginoutbutton">
                    Logout
                </button>



            </div>
            <!-- only show the log in button if the user is logged out -->
            <div v-if="!isProfileEnabled">
                <button onclick="location.href='/login'" class="loginoutbutton">Login</button >
            </div>
        </div>

        <!-- hamburger menu icon -->
        <div class="hamburgericons">
            <div id="hamburger">
                <img src="https://assets.stickpng.com/thumbs/588a6507d06f6719692a2d15.png" class="openhamburgericon" onclick="togglehamburgermenu()">
            </div>
        </div>


    </div>

    <div class="hamburgermenu" id = "hamburgermenu" style="display: none;">
        <center>
            <br>
            <br>
        <div class="hamburgerlinks">
            <router-link to="/view" class="hamburgerlink" onclick="togglehamburgermenu()">View Listings</router-link>
            <br /><br>
            <router-link to="/create" class="hamburgerlink" onclick="togglehamburgermenu()">Create Listings</router-link>
            <br /><br>
        </div>
        <div v-if="isProfileEnabled" class="hamburgerusername">
            {{ username }}
        </div>
        <br>
        <hr class="hraboveloginout">
        <div class="hamburgerloginout" onclick="togglehamburgermenu()">
            <!-- log in and log out buttons -->
            <div v-if="isProfileEnabled">

                <!-- check if the user is logged in or out but checking if the session exists -->
                <!-- if the session exists then the user is logged in -->
                <!-- only show the log out button if the user is logged in -->
                <button onclick="sessionStorage.clear(); location.href='/view'" class="hamburgerloginoutbutton">
                    Logout
                </button>



            </div>
            <!-- only show the log in button if the user is logged out -->
            <div v-if="!isProfileEnabled">
                <button onclick="location.href='/login'" class="hamburgerloginoutbutton">Login</button >
            </div>
        </div>

        </center>

    </div>

    <!-- <hr /> -->

    <br>
    <!-- the page returned from the links in the navbar V -->
    <div class="routerview">
        <router-view />
    </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
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
window.togglehamburgermenu = togglehamburgermenu;

onBeforeMount(() => {
    username.value = sessionStorage.getItem("username");
    console.log(sessionStorage.getItem("username"));
    if (username.value != undefined) {
        isProfileEnabled.value = true;
    }
});

//toggle the hamburger menu
// eslint-disable-next-line no-unused-vars
function togglehamburgermenu () {
  var x = document.getElementById("hamburgermenu");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.body.style.overflow='scroll'

  } else {
    x.style.display = "block";
    document.body.style.overflow='hidden'

  }

}

// if (sessionStorage) {
//     onMounted(() => {
//         // the DOM element will be assigned to the ref after initial render
//         document.getElementById("username").innerHTML = sessionStorage.getItem('username') // <div>This is a root element</div>
//       })
//       console.log(sessionStorage.getItem('username'));
// }

// I used this when the hamburger menu was a seperate page
// onMounted(() => {
//     if ((document.URL) == "http://localhost:8080/hamburger") {
//         document.getElementById('hamburger').setAttribute( "onClick", "window.location.href='/view'" );
//         console.log('athamburger');
//     } else {
//         document.getElementById('hamburger').setAttribute( "onClick", "window.location.href='/hamburger'" );
//         console.log('atview');

//     }
// })

</script>

<style scoped>
@import "./assets/styles/App.css";
</style>
