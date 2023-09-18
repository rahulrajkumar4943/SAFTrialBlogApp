<template>
    <section>
        <form @submit.prevent="createPost">
            <!-- Update post with id {{ $route.params.id }} -->
            <div>
                <label for="title">Title: </label>
                <input type="text" id="title" v-model="postData.title" />
            </div>
            <div>
                <label for="body">Body: </label>
                <textarea
                    id="body"
                    rows="6"
                    cols="22"
                    v-model="postData.body"
                ></textarea>
            </div>
            <button>Update Post</button>
        </form>
    </section>
</template>

<script>
// convert to composition api
import axios from "axios";

export default {
    data() {
        return {
            postData: {
                title: "",
                body: "",
                username: sessionStorage.getItem('username')
            },
        };
    },
    methods: {
        createPost() {
            const apiurl = "http://localhost:3000/api/posts/" + this.$route.params.id;
            axios
                .put(apiurl, this.postData)
                .then((response) => console.log(response))
                .then(location.href="/view");
        },
    },
};
</script>
