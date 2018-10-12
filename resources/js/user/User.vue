<template>
    <div class="main">
        <div class="splash-screen" v-show="loading">
            <div class="splash-overlay" ></div>
            <div class="splash-spinner"></div>
        </div>
        <Header />
        <div class="wrapper">
            <div class="wrapper--content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header/Header';

    export default {
        name: "User",

        async created() {
            this.$store.dispatch('loading/doShowLoading')
            await this.$store.dispatch('auth/doGetAuth')
            this.$store.dispatch('loading/doHiddenLoading')
        },

        components: {
            Header,
        },

        computed: {
            loading() {
                return this.$store.state.loading.show
            }
        },
    }
</script>

<style>
</style>
