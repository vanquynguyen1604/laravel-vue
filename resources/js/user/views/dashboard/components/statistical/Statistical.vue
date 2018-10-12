<template>
    <div class="statistical">
        <div class="statistical__left">
            <StatisticalInformationLearning />
            <StatisticalRankingTable />
            <StatisticalStatisticalLesson />
        </div>
        <div class="statistical__right">
            <StatisticalNewUserList />
            <StatisticalRankingTotal />
        </div>
    </div>
</template>

<script>
    import StatisticalInformationLearning from './StatisticalInformationLearning'
    import StatisticalRankingTable from './StatisticalRankingTable'
    import StatisticalStatisticalLesson from './StatisticalLesson'
    import StatisticalNewUserList from './StatisticalNewUserList'
    import StatisticalRankingTotal from './StatisticalRankingTotal'

    export default {
        name: "statistical",

        components: {
            StatisticalInformationLearning,
            StatisticalRankingTable,
            StatisticalStatisticalLesson,
            StatisticalNewUserList,
            StatisticalRankingTotal
        },
    }
</script>

<style lang="scss">
    @import "./statistical.scss";
</style>
