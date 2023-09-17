<template>
  <!-- view the listing -->
    <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        {{ post.body }}
        <br /><br><br>
        <!-- comment -->
        <a v-bind:href="'/comment/' + post.id">Comment</a>

        <br />
        <a v-bind:href="'/update/' + post.id">Edit</a>

        <br />
        <a v-bind:href="'/delete/' + post.id">Delete</a>
    </div>
    <br>
  <!-- view the comments -->
  Comments:
  <br><br><br>
  <!-- {{ comments }} -->
  <div v-for="comment in comments" :key="comment.id">
    {{ comment.content }}
    <br><br>

  </div>
</template>

<script>
import axios from "axios";

// get the listing
export default {
    name: "getPost",
    data() {
        return {
            posts: {},
            comments: {},
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
                "http://localhost:3000/api/posts/comments/" + this.$route.params.id
            );
            this.comments = data;
        },
    },
    beforeMount() {
        this.getPosts();
        this.getComments();
    },
};




</script>
