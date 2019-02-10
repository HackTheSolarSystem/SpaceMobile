import io from 'socket.io-client'
import store from './store'

let connection = null

class SocketSingleton{
  constructor(){
    if(!conn){
      conn = io('http://localhost:3000')    //current connects to localhost 3000

      conn.on('connect', () =>  {           //method of ran when the socket connects
        console.log(`User with socket id of ${conn.id} joined`) 

        conn.on('event goes here', () => {  

        })


      })
    }

    this.socket = conn;
  }
}

export default SocketSingleton