import VueRouter from 'vue-router'

// import home from '../views/home/router'
import auth from '../views/auth/router'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'User',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                // { ...home },
                { ...auth },
            ]
        },
    ],
})
