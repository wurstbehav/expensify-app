import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '112abc'
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)
})

test('should clear the uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: '112abc' }, action)
    expect(state).toEqual({})
})
