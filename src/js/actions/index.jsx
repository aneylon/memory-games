export const GET_USER = 'GET_USER'

export function getUser(user){
  console.log('getting user', user)
  return {
    type: GET_USER,
    payload: user
  }
}
