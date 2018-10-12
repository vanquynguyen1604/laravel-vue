<template>
    <div class="general">
        <div class="general__total-left">
            <GeneralTotalInstall />
            <GeneralTotalUser />
            <GeneralUserActive />
        </div>
        <div class="general__total-right">
            <GeneralTotalTopic />
            <GeneralTotalLesson />
        </div>
    </div>
</template>

<script>
    import GeneralTotalInstall from './GeneralTotalInstall';
    import GeneralTotalUser from './GeneralTotalUser';
    import GeneralUserActive from './GeneralUserActive';
    import GeneralTotalTopic from './GeneralTotalTopic';
    import GeneralTotalLesson from './GeneralTotalLesson';

    export default {
        name: "General",

        components: {
            GeneralTotalInstall,
            GeneralTotalUser,
            GeneralUserActive,
            GeneralTotalTopic,
            GeneralTotalLesson,
        },
    }
</script>

<style lang="scss">
    @import "./general.scss";
</style>
