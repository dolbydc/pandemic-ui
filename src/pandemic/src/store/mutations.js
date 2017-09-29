export default {
  update (state, newState) {
    state['game-state'] = newState
  },

  sendAction (state, action) {
    state['ui-action'] = action
  }
}
