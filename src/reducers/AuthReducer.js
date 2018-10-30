const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, accountType: '', UserData: {}, BtnVisible: true, licence: false, carImg: false };

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'Account_Type':
            return { ...state, accountType: action.payload };
        case 'Signup':
            return { ...state, navigate: true };
        case 'LOGIN_USER_SUCCESS':
            console.log(action.payload);
            return { ...state, UserData: action.payload };
        case 'Image_Upload_Success':
            if (action.payload.imageName === 'licence') {
                return { ...state, imgName: action.payload.imageName, BtnVisible: false, licence: true };
            } if (action.payload.imageName === 'carImg') {
                return { ...state, imgName: action.payload.imageName, BtnVisible: false, carImg: true };
            }
            break;
        case 'Image_Upload_Fail':
            return { ...state, imgName: action.payload.imageName, BtnVisible: true };
        case 'PlaceOfDelivery':
            return { ...state, DeliveryPlace: action.payload };
        case 'PlaceOfPickup':
            return { ...state, PickupPlace: action.payload };
        default:
            return state;
    }
};
