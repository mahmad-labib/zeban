import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import NavigatorService from '../navigation/services/navigator';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;


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

export const FormAction = ({ displayName, number, chosenDate, accountType, carType, navigate }) => {
    console.log(carType);
    const { currentUser } = firebase.auth();
    const usersRef = firebase.database().ref('users');
    return (dispatch) => {
        usersRef.child(currentUser.uid).update({
            displayName,
            phoneNumber: number,
            birthDate: chosenDate,
            accountType,
            carType
        })
            .then(dispatch(
                { type: 'Signup', payload: 'done' }, navigate('Policy'))
            )
            // .then(NavigatorService.navigate('Policy'))
            .catch(err => console.log(err));
    };
};

export const FetchUserData = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        console.log('dispatch');
        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: snapshot.val() });
            });
    };
};

export const SignOutAction = () => {
    firebase.auth().signOut();
};

export const UploadImage = ({ uri, imageName, mime = 'image/jpg' }) => {
    const { currentUser } = firebase.auth();
    let uploadBlob = null;
    const imageRef = firebase.storage().ref(`users/${currentUser.uid}/${imageName}`);
    return (dispatch) => {
        fs.readFile(uri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then((blob) => {
                uploadBlob = blob;
                return imageRef.put(uri, { contentType: mime });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then(() => {
                dispatch({
                    type: 'Image_Upload_Success',
                    payload: { imageName }
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'Image_Upload_Fail',
                    payload: { error }
                });
            });
    };
};

