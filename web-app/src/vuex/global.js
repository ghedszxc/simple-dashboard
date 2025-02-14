
const globalStore = {
    state: () => ({
        snackbar: {
            msg: '',
            isActive: false,
            timeout: 3000,
            color: ''
        }
    }),
    mutations: {
        UPDATE_SNACKBAR (state, payload) {
            state.snackbar = payload
        }
    },
    actions: {
        
    }
}

export default globalStore;