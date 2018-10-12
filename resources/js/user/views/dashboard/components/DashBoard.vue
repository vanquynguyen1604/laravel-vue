<template>
    <div class="dashboard">
        <General />
        <Statistical />
    </div>
</template>

<script>
    import General from './general/General'
    import Statistical from './statistical/Statistical'

    export default {
        name: "DashBoard",

        async created() {
            this.$store.dispatch('loading/doShowLoading')
            await Promise.all([
                this.$store.dispatch('dashboard/doFetchGeneral'),
                this.$store.dispatch('dashboard/doFetchLearning', { year: (new Date()).getFullYear() }),
                this.$store.dispatch('dashboard/doFetchRankingTotal'),
                this.$store.dispatch('dashboard/doFetchRankingTop'),
                this.$store.dispatch('dashboard/doFetchNewUsers'),
                this.$store.dispatch('dashboard/doFetchLessons'),
            ])
            this.$store.dispatch('loading/doHiddenLoading')
        },

        components: {
            General,
            Statistical
        },
    }
</script>

<style lang="scss">
    @import "./dashboard.scss";
</style>
