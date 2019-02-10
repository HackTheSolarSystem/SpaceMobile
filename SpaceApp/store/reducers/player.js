//Action types
const ASSIGNED_PLANET = 'ASSIGNED_PLANET'

//Action creators
const assignedPlanets = planet => ({
  type: ASSIGNED_PLANET, planet
})

//thunks
//probably will used to get planet info later

const initialState = {}

const playerReducer = (state = initialState, action) => {
  switch(action.type){
    case ASSIGNED_PLANET:
      return action.planet
    default:
      return state
  }
}
 
export default playerReducer
