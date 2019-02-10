//Action types
const PLAYER_JOINED = 'PLAYER_JOINED'
const GAME_RESTART = 'GAME_RESTART'

//Action creators
const playerJoined = player => ({
  type: PLAYER_JOINED,
  player
})

const gameRestart = () => ({
  type: GAME_RESTART
})

//thunks
//probably will used to get other player's planet info

const initialState = []

const teammatesReducer = (state = initialState, action) => {
  switch(action.type){
    case PLAYER_JOINED:
      return [...state, action.player]
    case GAME_RESTART:
      return []
    default:
      return state
  }
}
 
export default teammatesReducer
