<template>
    <div class="profile">
        <div class="profile__content">
            <div class="profile__header">
                <div class="profile__title">Profile</div>
            </div>
            <hr class="profile__hr">
            <div class="profile__information">
                <Avatar />
                <div class="show-profile">
                    <div class="info-title">
                        <p>General Information</p>
                    </div>
                    <div class="info-content">
                        <div class="info-content__item">
                            <label>Name *</label> 
                            <input class="name-input" v-model="auth.name">
                        </div>
                        <div class="info-content__item">
                            <label>Email *</label> 
                            <input class="email" v-model="auth.email" disabled>
                        </div>
                        <div class="info-content__item">
                            <label>Verified</label> 
                            <input class="verified" v-model="auth.verified" disabled>
                        </div>
                        <div class="info-content__item">
                            <label>Super Admin</label> 
                            <input class="is_super" v-model="auth.is_super" disabled>
                        </div>
                        <div class="update-manage">
                             <button class="btn btn-profile btn-update">
                                <i class="icon-check"></i> 
                                <span>Update Profile</span>
                            </button>
                            <button class="btn btn-profile btn-cancel" type="button" @click="onCancel">
                                <i class="icon-close"></i>   
                                <span>Cancel</span>      
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from '../avatar/Avatar'
    export default {
        name: "Profile",

        components: { Avatar },

        computed: {
            auth() {
                return this.$store.state.auth.admin
            },
        },

        methods: {
            onCancel() {
                this.$dialog.confirm(
                    "You really want to cancel?", { okText: 'Yes!', cancelText: 'No!' }
                ).then(() => {
                    return this.$router.push('/dashboard')
                }).catch(() => {})
            },
        }
    }
</script>

<style lang="scss">
    @import "./profile.scss";
</style>
