import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
} from 'react-native';
import { } from 'native-base';
import MapView, { Marker, AnimatedRegion, Polyline, MapViewAnimated, } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';


import haversine from 'haversine';

let { width, height } = Dimensions.get('window');

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class MapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 0,
            longitude: 0,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: 0,
                longitude: 0
            })
        };
    }

    // componentWillMount() {
    //     navigator.geolocation.getCurrentPosition(
    //         position => { },
    //         error => alert(error.message),
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 20000,
    //             maximumAge: 1000
    //         }
    //     );
    // }

    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(data => console.log('location', data));
        if (this.props.MapMarker) {
            this.AnimateOnPress(this.props.MapMarker);
        } else {
            this.watchID = navigator.geolocation.watchPosition(
                position => {
                    const { coordinate, routeCoordinates, distanceTravelled } = this.state;
                    const { latitude, longitude } = position.coords;

                    const newCoordinate = {
                        latitude,
                        longitude
                    };

                    if (Platform.OS === "android") {
                        if (this.marker) {
                            this.marker._component.animateMarkerToCoordinate(
                                newCoordinate,
                                500
                            );
                        }
                    } else {
                        coordinate.timing(newCoordinate).start();
                    }

                    this.setState({
                        latitude,
                        longitude,
                        routeCoordinates: routeCoordinates.concat([newCoordinate]),
                        distanceTravelled:
                            distanceTravelled + this.calcDistance(newCoordinate),
                        prevLatLng: newCoordinate
                    });
                },
                error => console.log(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        }
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    AnimateOnPress(place) {
        const { latitude, longitude } = place;
        const NewCoordinate = {
            latitude,
            longitude
        };
        this.setState({
            latitude,
            longitude,
            coordinate: NewCoordinate
        });
        this.map.animateToCoordinate(
            {
                latitude: place.latitude,
                longitude: place.longitude,
            },
            350
        );
    }

    render() {
        const nav = this.props.navigation;
        return (
            <MapView
                // provider={PROVIDER_GOOGLE}
                ref={map => this.map = map}
                style={styles.map}
                showUserLocation={true}
                followUserLocation={true}
                cacheEnabled={true}
                loadingEnabled
                region={this.getMapRegion()}
                onPoiClick={data =>
                    RNGooglePlaces.lookUpPlaceByID(data.nativeEvent.placeId)
                        .then((results) => {
                            this.AnimateOnPress(results);
                            this.props.PlaceOfDelivery(results);
                        }
                        )
                        .catch((error) => console.log(error.message))
                }
                onPress={
                    data =>
                        RNGooglePlaces.openAutocompleteModal()
                            .then((place) => {
                                this.AnimateOnPress(place);
                                this.props.PlaceOfDelivery(place);
                            })
                            .catch(error => console.log(error.message))
                }
            >
                <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                <Marker.Animated
                    ref={marker => {
                        this.marker = marker;
                    }}
                    coordinate={this.state.coordinate}
                />
            </MapView >
        );
    }
}

const styles = {
    // container: {
    //     ...StyleSheet.absoluteFillObject,
    //     justifyContent: "flex-end",
    //     alignItems: "center"
    // },
    map: {
        width: '100%', height: height / 2, flex: 1
    },
    latlng: {
        width: 200,
        alignItems: 'stretch'
    },
};
