<template>
    <p>View Listings page</p>
    <div v-for="post in posts" :key="post.id">
        <a v-bind:href="'/view/' + post.id">{{ post.title }}</a>
        <br>
        <!-- {{ post.body }} -->
        <br>
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