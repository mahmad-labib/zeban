import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  Image
} from "react-native";
import MapComponent from '../../../components/common/map';
import { Button, Icon } from 'native-base'
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import haversine from "haversine";
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import GreenDot from '../../../png/green-dot.png';
import Msg from '../../../png/send-button.png';
import MapMarker from '../../../png/map-marker.png';
import Cancel from '../../../png/cancel.png';
let { width, height } = Dimensions.get('window');


const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class TalabDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    };
  }

  componentDidMount() {

  }

  render() {
    const nav = this.props.navigation;
    const Data = this.props.navigation.state.params;
    const { Time, hour, minutes } = Data.value.DeliveryTime;
    console.log(Data);
    return (
      <AppTemplate navigation={nav} name="تفاصيل الطلب">
        {/* <View style={{ flexDirection: 'column', height: height/2}}> */}
        <View style={{ position: 'relative' }}>
          <MapComponent MapMarker={Data.value.PickupPlace} />
          <View style={{ position: 'absolute', top: 0, alignSelf: 'center', height: 40, backgroundColor: 'rgba(135, 135, 135, 0.8)' }}>
            <Text style={{ color: 'white', alignSelf: 'center', textAlign: 'center', width: '55%' }}>
              تتطلب خدمه ذيبان فزعه تكاليف اضافيه سيتم تفريغ مندوب بشكل خاص لتوصيل طلبك
            </Text>
          </View>
          <View style={{ position: 'absolute', width: '90%', bottom: 0, alignSelf: 'center' }}>
            <Button iconLeft rounded style={{ alignSelf: 'center', height: 24, backgroundColor: '#15588D' }}>
              <Icon style={{ marginLeft: 3 }}>
                <Image source={Cancel} />
              </Icon>
              <Text style={{ paddingHorizontal: 20, color: 'white', fontSize: 16 }}>الغاء الطلب</Text>
            </Button>
            <ListCard header={'مكان الاستلام '} footer={Data.value.PickupPlace.address} rightIconSrc={MapMarker} />
            <ListCard header={'مكان التسليم'} footer={Data.value.DeliveryPlace.address} rightIconSrc={MapMarker} />
          </View>
        </View>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <ListCard header={'نوع السياره '} footer={Data.value.DeliveryCar} deliveryTime={`${hour}:${minutes} ${Time}`} />
          <ListCard header={'الحاله'} footer={'جاري التوصيل'} leftIconSrc={GreenDot} />
          <ListCard header={'السائق'} footer={'عدنان شريف'} btnText="مراسله" btnIconSrc={Msg} />
        </View>
        {/* </View> */}
      </AppTemplate >
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
    width: '100%', height: height * 0.8, flex: 1
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
};
