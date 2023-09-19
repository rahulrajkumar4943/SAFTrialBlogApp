<template>
  <div class="heading">

    <p>Must Read:</p>


  </div>
    <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post">
            <a v-bind:href="'/view/' + post.id" class="posttitle">
            {{post.title}}</a>
            <br />
            <img :src="post.imgurl" class="blogpic"/>
            <br />
            <!-- {{ post.body }} -->
            <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "getPosts",
    data() {
        return {
            posts: {},
        };
    },
    methods: {
        async getPosts() {
            const { data } = await axios.get("http://localhost:3000/api/posts");
            this.posts = data;
        },
    },
    beforeMount() {
        this.getPosts();
    },
};
</script>

<style scoped>
@import "../assets/styles/ViewListings.css";
</style>
