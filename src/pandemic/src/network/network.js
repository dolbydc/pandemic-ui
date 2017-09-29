export default function createWebSocketPlugin (socket) {
  console.log('createWebSocketPlugin ' + socket)
  return store => {
    socket.addEventListener('message', function (message) {
      store.commit('update', JSON.parse(message.data))
    })

    store.subscribe(mutation => {
      if (mutation.type === 'sendAction') {
        socket.send(JSON.stringify(mutation.payload))
      }
    })
  }
}
