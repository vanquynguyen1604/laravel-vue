<template>
    <div class="ranking-total">
        <div class="statistical__right--statis-beginner">
            <div class="title-beginner">
                Beginner
            </div>
            <div class="statis-amount-beginner">
                <div class="beginner-image">
                    <img src="/statics/beginner.png" width="30" height="30" alt="">
                </div>
                <p class="total-amount">{{ total ? total.beginner : 0 }}</p>
            </div>
        </div>
        <div class="statistical__right--statis-junior">
            <div class="title-junior">
                Junior
            </div>
            <div class="statis-amount-junior">
                <div class="junior-image">
                    <img src="/statics/junior.png" width="30" height="30" alt="">
                </div>
                <p class="total-amount">{{ total ? total.junior : 0 }}</p>
            </div>
        </div>
        <div class="statistical__right--statis-senior">
            <div class="title-senior">
                Senior
            </div>
            <div class="statis-amount-senior">
                <div class="senior-image">
                    <img src="/statics/senior.png" width="30" height="30" alt="">
                </div>
                <p class="total-amount">{{ total ? total.senior : 0 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticalRankingTotal",

        computed: {
            total() {
                return this.$store.state.dashboard.rankingTotal
            },
        }
    }
</script>
