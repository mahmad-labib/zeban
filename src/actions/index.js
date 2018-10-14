import firebase from 'react-native-firebase';

// export const addPlace = placeName => {
//     return {
//         type: 'ADD_PLACE',
//         payload: placeName
//     };
// };

export const AccountTypeAction = (accountType) => {
    return {
        type: 'Account_Type',
        payload: accountType,
    };
};

export const FormAction = ({ displayName, number, chosenDate, accountType, carType }) => {
    console.log(carType);
    const { currentUser } = firebase.auth();
    const usersRef = firebase.database().ref('users');
    usersRef.child(currentUser.uid).update({
        displayName,
        phoneNumber: number,
        birthDate: chosenDate,
        accountType,
        carType
    })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    return {
        type: 'User_Data',
        payload: 'done'
    };
};

export const SignOutAction = () => {
    firebase.auth().signOut();
};

