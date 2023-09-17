<template>

    <div v-for="post in posts" :key="post.id">

        <br />
        <p>Deleting post {{ post.id }}...</p>
    </div>
</template>

<script>
import axios from "axios";
//import { router } from "vue-router";

export default {
    name: "deletePost",
    data() {
        return {
            posts: {},
        };
    },
    methods: {
        async deletePost() {
            // console.log(this.$route.params.id);
            await axios.delete(
                "http://localhost:3000/api/posts/" + this.$route.params.id
            );
            // router.replace({ path: '/' })  
        },
        async deleteComments() {
            // console.log(this.$route.params.id);
            await axios.delete(
                "http://localhost:3000/api/posts/comments/" + this.$route.params.id
            );
            // router.replace({ path: '/' })  
        },
    },
    beforeMount() {
        this.deletePost();
        this.deleteComments();
        window.location.href = "/view";      

    },
};
</script>
