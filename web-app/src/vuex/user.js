
const userStore = {
    state: () => ({
        userList: [
            {
                name: 'Gerard',
                email: 'mendiolagerard96@gmail.com',
                contactNumber: '+63 91234'
            },
            {
                name: 'Francis',
                email: 'francisM@gmail.com',
                contactNumber: '+63 94321'
            }
        ],
        adminList: [
            {
                name: 'Super Admin',
                members: ['Daniel', 'Prince']
            },
            {
                name: 'Account Maanager',
                members: ['Keith', 'Killua']
            },
        ]
    }),
    mutations: {
        UPDATE_USER_LIST (state, payload) {
            state.userList = payload
        },
        UPDATE_ADMIN_LIST (state, payload) {
            state.adminList = payload
        },
    },
    actions: {

    }
}

export default userStore;