<template>
    <div class="password">
        <div class="password__content">
            <div class="password__header">
                <div class="password__title">password</div>
            </div>
            <hr class="password__hr">
            <div class="password__information">
                <Avatar />
                <div class="show-password">
                    <div class="info-title">
                        <p>Change Password</p>
                    </div>
                    <form class="info-content" @submit.prevent="changePassword">
                        <div class="info-content__item">
                            <label>Current Password *</label> 
                            <input type="password" class="name-input" v-model="password.current_password" autocomplete="off">
                        </div>
                        <div class="info-content__item">
                            <label>New Password *</label> 
                            <input type="password" v-model="password.new_password" autocomplete="off">
                        </div>
                        <div class="info-content__item">
                            <label>Confirm New Password *</label> 
                            <input type="password" v-model="password.new_password_confirmation" autocomplete="off">
                        </div>
                        <div class="update-manage">
                            <button class="btn btn-profile btn-update" type="submit">
                                <i class="icon-check"></i> 
                                <span>Change password</span>
                            </button>
                            <button class="btn btn-profile btn-cancel" type="button" @click="onCancel">
                                <i class="icon-close"></i>   
                                <span>Cancel</span>      
                            </button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from '../avatar/Avatar'
    export default {
        name: "Password",

        components: { Avatar },

         data() {
            return {
                password: {
                    current_password: '',
                    new_password: '',
                    new_password_confirmation:'',
                },
            }
        },

        methods: {
            changePassword(e) {
                this.$store.dispatch('auth/doChangePassword', this.password)
            },

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
    @import "./change-password.scss";
</style>
