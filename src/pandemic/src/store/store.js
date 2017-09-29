import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createWebSocketPlugin from '../network/network'

Vue.use(Vuex)

const networkPlugin = createWebSocketPlugin(new WebSocket('ws://localhost:7888'))

export const store = new Vuex.Store({
  state: {
    'game-state': {
      'discarded-player-cards': [],
      'cities': [],
      'discarded-infection-cards': [],
      'state': 'new',
      'outbreaks': 0,
      'player-cards': [],
      'infections-rates': [],
      'infection-cards': [],
      'players': [],
      'infection-rate': 0,
      'viruses': []
    },
    'ui-action': null
  },
  actions,
  getters,
  mutations,
  plugins: [networkPlugin]
})
