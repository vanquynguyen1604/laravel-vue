<template>
    <div class="dropdown dropdown-notification" :class="dropdown ? 'dropdown-display' : ''">
        <a>No Notifications</a>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        props: ['dropdown']
    }
</script>

<style lang="scss">
    @import "./dropdown.scss";
</style>
