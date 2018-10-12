import Profile from 'User/views/auth/components/profile/Profile'
import ChangePassword from 'User/views/auth/components/change-password/ChangePassword'

export default {
    path: '/me',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: 'profile',
            component: Profile,
            name: 'Profile - Laravel Vue',
        },
        {
            path: 'change-password',
            component: ChangePassword,
            name: 'Change Password - Laravel Vue',
        },
    ],
}

