const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, accountType: '', };

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'Account_Type':
            return { ...state, accountType: action.payload };
        case 'User_Data':
            return { ...state };
        default:
            return state;
    }
};
