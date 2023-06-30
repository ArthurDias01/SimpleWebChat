# SimpleWebChat
A simple real time chat to understand WebSocket fundamentals
(4h course given on Ignite @rocketseat)

#Summary of content Learnt:
- dependency injection (Tsyringe)
- websocket (socket.io)
- express
- http

## Websocket Protocol
![image](https://github.com/ArthurDias01/SimpleWebChat/assets/83284629/d9cb84ff-4190-46ca-b2b0-c9eed8c0d5a7)

### Listening Events:

  ```ts
   socket.on("event_name", EventCallback)
```

### Emmiting Events:
  ```ts
   socket.emit("event_name", EventCallback)
```

#### Events for the client-connected user
```ts
socket
```

#### Events for other clients-connected
```ts
io
```

#### To send events for all connected users but the one at the particular connection:
```ts
=> socket.broadcast.emit("event", callback)
```

#### To connect two or more client-connected on the socket use:
```ts
socket.join(ArrayOfUsersToConnect)
```

#### Send Message to all people connected at the same socket room:
```ts
io.to("ROOM_ID").emit("EVENT", data)
```
