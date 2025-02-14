import { createStore } from 'vuex'

import globalStore from './global'
import userStore from './user'

const store = createStore({
    modules: {
        'global': globalStore,
        'user': userStore
    }
})


export default store;