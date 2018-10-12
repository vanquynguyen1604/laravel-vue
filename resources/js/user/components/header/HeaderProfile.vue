<template>
    <div class="dropdown dropdown-profile" :class="dropdown ? 'dropdown-display' : ''">
        <ul>
            <li class="dropdown-profile__item">
                <router-link to="/me/profile">
                    <i class="icon-user"></i>
                    Profile
                </router-link>
            </li>
            <li class="dropdown-profile__item">
                <router-link to="/me/change-password">
                    <i class="icon-settings"></i>
                    Password
                </router-link>
            </li>
            <li class="dropdown-profile__item" @click="onLogout">
                <a>
                    <i class="icon-action-undo"></i>
                    Logout
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "dropdown",

        props: ['dropdown'],

        methods: {
            async onLogout() {
                await axios.post('/logout')

                return window.location.reload()
            },
        },
    }
</script>

<style lang="scss">
    @import "./dropdown.scss";
</style>
