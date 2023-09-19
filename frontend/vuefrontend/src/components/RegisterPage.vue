<template>
    <section>
        <center>
        <form @submit.prevent="sendLoginDetails()">
            <div>
                <label for="email">Email: </label>
                <br>
                <!-- use pattern attribut to add regex and make sure its an email -->
                <input type="text" id="email" v-model="email" required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" title="Enter a valid email" >
            </div>
            <br>
            <div>
                <label for="username">Username:</label>
                <br>
                <input type="text" id="username" v-model="username" required/>
            </div>
            <br>
            <div>
                <label for="passcode">Password: </label>
                <br>
                <input type="text" id="passcode" v-model="passcode" required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number">
            </div>
            <br>
            <button class="button">Submit</button>            
        </form>
    </center>
    </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
// import { useRouter } from "vue-router";

const username = ref("");
const passcode = ref("");
const email = ref("");

// const router = useRouter();
const sendLoginDetails = () => {
    let postData = { username: username.value, passcode: passcode.value, email: email.value };
    axios
        .post("http://localhost:3000/api/posts/users/register", postData)
        .then((response) => {
            console.log(response);

        });
        window.location.href="/login"

    // console.log(this.postData.username);
};

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