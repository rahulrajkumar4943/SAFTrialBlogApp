<template>
    <!-- view the listing -->

    <div v-for="post in posts" :key="post.id">
        <!-- image -->

        <!-- {{ post.imgurl }} -->
        <div class="postermethods" id="postermethods">
            <p class="posterusername">{{ post.username }}</p>
            <!-- <p>current username: {{ username }}</p> -->

            <!-- only show posterlinks if session username is -->
            <!-- the same as the post.username -->
            <!-- define a const to check if the user is the same user who posted the blog -->
            <!-- post.username is the username of the poster of the blog -->
            <!-- username is the username of the user that is currently logged in -->

            <div class="posterlinks" v-if="post.username == username">
                <a v-bind:href="'/update/' + post.id">Edit</a>
                <br />
                <a v-bind:href="'/delete/' + post.id">Delete</a>
            </div>
        </div>
        <center>
            <img id="blogimage" class="blogimage" :src="post.imgurl" />

        </center>

        <h1>{{ post.title }}</h1>
        {{ post.body }}
        <br /><br />
        <!-- comment -->
        <p class="commentsheading">Comments:</p>

        <a v-bind:href="'/comment/' + post.id" v-if="username">Comment</a>
        <p v-if="!username">Log in to add a comment</p>
    </div>

    <!-- view the comments -->
    <br />
    <!-- {{ comments }} -->
    <div v-for="comment in comments" :key="comment.id">
        {{ comment.username }}:
        <br />
        {{ comment.content }}
        <br /><br />
        <hr>
    </div>
</template>

<script>
import axios from "axios";

// check if current user is the one who posted the blog

// get the listing
export default {
    name: "getPost",
    data() {
        return {
            posts: {},
            comments: {},
            username: {},
        };
    },
    methods: {
        async getPosts() {
            // console.log(this.$route.params.id);
            const { data } = await axios.get(
                "http://localhost:3000/api/posts/" + this.$route.params.id
            );
            this.posts = data;
        },
        async getComments() {
            // console.log(this.$route.params.id);
            const { data } = await axios.get(
                "http://localhost:3000/api/posts/comments/" +
                    this.$route.params.id
            );
            this.comments = data;
        },
        async getSessionUser() {
            const user = sessionStorage.getItem("username");
            this.username = user;
        },
    },
    beforeMount() {
        this.getPosts();
        this.getComments();
        this.getSessionUser();
    },
};
</script>

<style scoped>
@import "../assets/styles/ViewListing.css";
</style>
