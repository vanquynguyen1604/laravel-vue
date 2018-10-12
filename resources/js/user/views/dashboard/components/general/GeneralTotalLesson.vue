<template>
    <div class="general__total-right-lesson">
        <p class="general__total-right-title">Total Topic</p>
        <p class="general__total-right-amount">{{ lesson ? lesson.lesson : 0 }}</p>
        <i aria-hidden="true" class="icon-book-open"></i>
    </div>
</template>

<script>
    export default {
        name: "GeneralTotalLesson",

        computed: {
            lesson() {
                return this.$store.state.dashboard.general.content
            },
        }
    }
</script>
