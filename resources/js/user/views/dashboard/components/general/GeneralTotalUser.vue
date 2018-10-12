<template>
    <div class="general__total-left-item">
        <p class="general__total-left-title">Total User</p>
        <div class="general__total-left-user">
            <div class="total-user-amount">
                <p class="general__total-amount">{{ users ? users.register : 0 }}</p>
                <i class="icon-people general__total-icon"></i>
            </div>
            <div class="total-user-percent">
                <p class="general__total-percent-number">{{ percentRegister }}%</p>
                <div class="general__progress-bar">
                    <div class="general__progress-total-percent" v-bind:style="{ width: percentRegister + '%' }"></div>
                </div>
                <p class="general__percent-title">Percentage register</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralTotalUser",

        computed: {
            install() {
                return this.$store.state.dashboard.general.install
            },
            
            users() {
                return this.$store.state.dashboard.general.users
            },

            percentRegister() {
                let percent = (this.users && this.install.total && this.install.total > 0) ? this.users.register*100/this.install.total : 0

                return Math.min(percent, 100).toFixed(1);
            }
        }
    }
</script>
