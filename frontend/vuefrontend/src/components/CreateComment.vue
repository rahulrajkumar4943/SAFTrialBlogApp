<template>
    <section>
        <form @submit.prevent="createComment">
            <div>
                <label for="comment">Comment: </label>
                <input type="text" id="comment" v-model="postData.content" />
            </div>

            <button>Comment</button>
        </form>
    </section>
</template>

<script>
// change to composition api
import axios from "axios";

export default {
    data() {
        return {
            postData: {
                postid: this.$route.params.id,
                content: "",
                username: sessionStorage.getItem('username')
            },
        };
    },
    methods: {
        createComment() {
            axios
            // i dont know how to add the id to the route in composition api
                .post("http://localhost:3000/api/posts/comment/"+ this.$route.params.id, this.postData)
                .then((response) => console.log(response))
                .then(location.href="/view/"+this.$route.params.id);
        },
    },
};
</script>
