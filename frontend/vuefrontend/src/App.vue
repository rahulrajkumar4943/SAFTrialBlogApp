<template>
    <!-- navbar -->
    <p>Choose what part of this page you want to see:</p>
    <!-- links to view and create listings pages V -->
    <router-link to="/view">View Listings</router-link>
    <br />
    <router-link to="/create">Create Listings</router-link><br />
    <br>

    <hr />

    <!-- the page returned from the links in the navbar V -->
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            activeComp: "",
        };
    },
};
</script>

<style scoped>
button {
    padding: 5px;
    margin: 10px;
}
div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
}
</style>
