<template>
    <section>
        <form @submit.prevent="createPost">
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
            <button>Create Post</button>
        </form>
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
