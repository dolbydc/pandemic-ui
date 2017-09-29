export default {
  discardedPlayerCards (state) {
    return state['game-state']['discarded-player-cards']
  },

  cities (state) {
    return state['game-state'].cities
  },

  discardedInfectionCards (state) {
    return state['game-state']['discarded-infection-cards']
  },

  gameState (state) {
    return state['game-state'].state
  },

  totalOutbreaks (state) {
    return state['game-state'].outbreaks
  },

  playerCards (state) {
    return state['game-state']['player-cards']
  },

  infectionsRate (state) {
    return state['game-state']['infections-rates']
  },

  infectionCards (state) {
    return state['game-state']['infection-cards']
  },

  players (state) {
    return state['game-state']['players']
  },

  infectionRate (state) {
    return state['game-state']['infection-rate']
  },

  viruses (state) {
    return state['game-state'].viruses
  }
}
