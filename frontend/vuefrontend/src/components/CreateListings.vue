<template>
    <section>
    <center>
        <form @submit.prevent="createPost">
            <div>
                <label for="title">Title: </label><br>
                <input type="text" id="title" v-model="postData.title" />
            </div>
            <br>
            <div>
                <label for="body">Body: </label><br>
                <textarea
                    id="body"
                    rows="6"
                    cols="22"
                    v-model="postData.body"
                ></textarea>
            </div>
            <br>
            <div>
                
                <label for="imgurl">Enter your image url: </label><br>
                <input type="url" id="imgurl" v-model="postData.imgurl" />
            </div>      
            <br>      
            <button class="button">Create Post</button>
        </form>
    </center>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            postData: {
                title: "",
                body: "",
                username: sessionStorage.getItem('username'),
                imgurl: ""
            },
        };
    },
    methods: {
        createPost() {
            axios
                .post("http://localhost:3000/api/posts", this.postData)
                .then((response) => console.log(response))
                .then(location.href="/view");
        },
    },
};
</script>


<style scoped>
@import "../assets/styles/FormPages.css";
</style>