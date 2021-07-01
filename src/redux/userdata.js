export const Token = 'Token'

const initialState = {
  authInfo: {},

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Token:
      return {
        authInfo: action.payload 
      }
    
  }
  return state
}

export default userReducer 