<template>
    <section>
        <form @submit.prevent="sendLoginDetails()">
            <div>
                <label for="email">Email: </label>
                <input type="text" id="email" v-model="email" />
            </div>
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" />
            </div>
            <div>
                <label for="passcode">Password: </label>
                <input type="text" id="passcode" v-model="passcode" />
            </div>
            <button>Register</button>
            
        </form>
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
