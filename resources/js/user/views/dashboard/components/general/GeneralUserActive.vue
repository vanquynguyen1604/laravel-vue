<template>
    <div class="general__total-left-item general__item-last">
        <p class="general__total-left-title">User Active</p>
        <div class="general__total-left-user">
            <div class="total-user-amount">
                <p class="general__total-amount">{{ users ? users.active : 0 }}</p>
                <i class="icon-people general__total-icon"></i>
            </div>
            <div class="total-user-percent">
                <p class="general__total-percent-number">{{ percentActive }}%</p>
                <div class="general__progress-bar">
                    <div class="general__progress-total-percent" v-bind:style="{ width: percentActive + '%' }"></div>
                </div>
                <p class="general__percent-title">Percentage active</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralUserActive",

        computed: {
            users() {
                return this.$store.state.dashboard.general.users
            },

            percentActive() {
                let percent = (this.users && this.users.register > 0 ? (this.users.active/this.users.register)*100 : 0);

                return Math.min(percent, 100).toFixed(1);
            }
        }
    }
</script>
