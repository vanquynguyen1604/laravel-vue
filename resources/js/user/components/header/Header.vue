<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content--logo">
                <router-link to="/">
                    <img class="chatty-logo" src="/logo.png" />
                    <span class="chatty-header-title">Hr Bot</span>
                </router-link>
            </div>
            <div
                class="header__content--notifications"
                @click="notification.show=!notification.show, profile.show=false"
                ref="notification"
            >
                <i class="icon-bell"></i>
                <span class="chatty-notification-total"></span>
                <HeaderNotification :dropdown="notification.show"/>
            </div>
            <div
                class="header__content--profile"
                @click.prevent="profile.show=!profile.show, notification.show=false"
                ref="profile"
            >
                <img class="chatty-profile-avatar" src="/logo.png">
                <span>{{ auth.name }}</span>
                <i :class="profile.show ? 'icon-arrow-up' : 'icon-arrow-down'"></i>
                <HeaderProfile :dropdown="profile.show"/>
            </div>
        </div>
    </header>
</template>

<script>
    import HeaderProfile from './HeaderProfile'
    import HeaderNotification from './HeaderNotification'
    export default {
        name: "Header",
        components: {
            HeaderNotification,
            HeaderProfile
        },
        data() {
            return {
                profile: {
                    show: false,
                },

                notification: {
                    show:false
                }
            }
        },

        computed: {
            auth() {
                return this.$store.state.auth.user
            },
        },

        methods:{
            documentClick(e){
                let notification = this.$refs.notification
                let profile = this.$refs.profile
                if ( notification !== e.target && !notification.contains(e.target) ) {
                    this.notification.show = false;
                }
                if ( profile !== e.target && !profile.contains(e.target) ) {
                    this.profile.show = false;
                }
            }
        },
        created(){
            document.onclick = this.documentClick;
        }
    }
</script>

<style lang="scss">
    @import "./header.scss";
</style>
