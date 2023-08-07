
import Vuex from 'vuex'

import albums from './albums'


export default new Vuex.Store({
    modules: {
        albums
    },
    strict: true,
  })