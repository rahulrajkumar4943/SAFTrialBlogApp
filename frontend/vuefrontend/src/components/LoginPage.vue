<template>
    <section>
    <center>
        <!-- on submit run this method -->
        <form @submit.prevent="sendLoginDetails()">
            <div>
                <label for="username">Username:</label><br>
                <!-- the v-model connects to the composition api variables before they are sent to the backend -->
                <input type="text" id="username" v-model="username" />
            </div>
            <div>
                <label for="passcode">Password: </label><br>
                <input type="text" id="passcode" v-model="passcode" />
            </div>
            <br>
            <button class="button">Login</button>

        </form>
        <a href="/register">Register instead</a>
    </center>
    </section>
</template>

<script setup>
// axios is superior. fetch causes pain i cant lie
import axios from "axios";
import { ref } from "vue";
// import { useRouter } from "vue-router";

// initialize these variables as refs because they will be changed when binded to the form's v-models
const username = ref("");
const passcode = ref("");

// const router = useRouter();
const sendLoginDetails = () => {
    let postData = { username: username.value, passcode: passcode.value };
    axios
        .post("http://localhost:3000/api/posts/users/login/", postData)
        .then((response) => {
            console.log(response);
            // { passwordsMatch: true }
            if (response.data.passwordsMatch == true) {
                sessionStorage.setItem("username", response.data.username);
                // router.push("/view");
                // could not user router push because the username variable in app.vue wont update
                // it only updates on a reload / navigate to the page which vue doesnt do
                // but location href does
                location.href = "/view"
            } else {
                // if the passwords do not match
                console.log("wrong username or password");
            }
        });

    // console.log(this.postData.username);
};

// old version of code VV

// export default {
//     data() {
//         return {
//             postData: {
//                 username: "",
//                 passcode: "",
//             },
//         };
//     },
//     methods: {
//         sendLoginDetails() {
//             axios
//                 .post(
//                     "http://localhost:3000/api/posts/users/getpassword/",
//                     this.postData
//                 )
//                 .then((response) => {
//                     console.log(response.data);
//                     // { passwordsMatch: true }
//                     if (response.data.passwordsMatch == true) {
//                         sessionStorage.setItem('username',this.postData.username);
//                         location.href = "/view";
//                     } else {
//                         console.log('wrong username or password')
//                     }
//                 });

//             console.log(this.postData.username);
//         },
//     },
// };
</script>

<style scoped>
@import "../assets/styles/FormPages.css";
</style>