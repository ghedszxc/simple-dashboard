import { createStore } from 'vuex'

import globalStore from './global'

const store = createStore({
    modules: {
        'global': globalStore
    }
})


export default store;