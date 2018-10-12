<template>
    <div class="statistical__right--new-user">
        <div class="statistical__right--new-user__header">
            <div class="new-user-title">
                New User
            </div>
            <div class="view-all-user">
                <router-link to="/users" class="btn btn-view-all">
                    View All
                </router-link>
            </div>
        </div>
        <div class="statistical__right--new-user__content">
            <div class="list-user" v-for="user in users">
                <img v-bind:src="user.avatar">
                <div class="content-right">
                    <div class="user-name">{{ user.name }}</div>
                    <div class="user-time">{{ user.joined_at }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticalNewUserList",

        computed: {
            users() {
                return this.$store.state.dashboard.users
            },
        }
    }
</script>
