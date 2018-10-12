<template>
    <div class="avatar">
        <img :src="`${auth.avatar ? auth.avatar : 'http://via.placeholder.com/120x120'}`" />
    </div>
</template>

<script>
    export default {
        name: "Avatar",

        computed: {
            auth() {
                return this.$store.state.auth.admin
            },
        },
    }
</script>

<style lang="scss">
    @import "./avatar.scss";
</style>
