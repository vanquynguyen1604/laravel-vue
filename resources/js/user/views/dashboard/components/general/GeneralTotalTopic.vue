<template>
    <div class="general__total-right-topic">
        <p class="general__total-right-title">Total Topic</p>
        <p class="general__total-right-amount">{{ topic ? topic.topic : 0 }}</p>
        <i aria-hidden="true" class="icon-layers"></i>
    </div>
</template>

<script>
    export default {
        name: "GeneralTotalTopic",

        computed: {
            topic() {
                return this.$store.state.dashboard.general.content
            },
        }
    }
</script>
