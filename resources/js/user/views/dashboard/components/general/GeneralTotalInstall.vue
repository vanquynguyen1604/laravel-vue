<template>
    <div class="general__total-left-item">
        <p class="general__total-left-title">Total Install</p>
        <div class="general__total-left-install">
            <div class="total-install-amount">
                <p class="general__total-amount">{{ install ? install.total : 0 }}</p>
                <i class="icon-settings general__total-icon"></i>
            </div>
            <div class="total-install-statis">
                <div class="total-install-month">
                    <span class="total-month">Month</span> 
                    <span class="total-month-amount">{{ install ? install.month : 0 }}</span>
                </div>
                <div class="total-install-year">
                    <span class="total-this-year">This year</span> 
                    <span class="total-this-year-amount">{{ install ? install.year : 0 }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralTotalInstall",

        computed: {
            install() {
                return this.$store.state.dashboard.general.install
            },
        }
    }
</script>
