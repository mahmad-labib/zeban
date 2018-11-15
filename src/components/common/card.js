import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Left, Icon, Right, Card, CardItem, Text, View, Button } from 'native-base';
import Stars from 'react-native-stars';

export default class ListCard extends Component {
  btn() {
    if (this.props.btnText) {
      return (
        <Button iconLeft rounded bordered info>
          <Icon>
            <Image source={this.props.btnIconSrc} />
          </Icon>
          <Text>{this.props.btnText}</Text>
        </Button>
      );
    }
  }


  deliveryClock() {
    if (this.props.deliveryTime) {
      return (
        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold' }}>وقت التوصيل</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text note style={{ color: '#707070', fontSize: 15, fontWeight: 'bold' }}>{this.props.deliveryTime}</Text>
          </View>
        </View>
      );
    }
  }

  cardRightIcon() {
    if (this.props.rightIcon) {
      return (
        <View style={{ flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <AutoHeightImage
            width={this.props.rightIconWidth}
            source={this.props.rightIcon}
            style={{ alignSelf: 'center' }}
          />
        </View>
      );
    }
  }

  StarsComponent() {
    if (this.props.stars) {
      return (
        <Stars
          default={2.5}
          count={5}
          half={true}
          starSize={50}
          fullStar={<Icon type='MaterialCommunityIcons' name={'star'} style={[styles.myStarStyle]} />}
          emptyStar={<Icon type='MaterialCommunityIcons' name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
          halfStar={<Icon type='MaterialCommunityIcons' name={'star-half'} style={[styles.myStarStyle]} />}
        />
      )
    }
  }

  LeftText() {
    if (this.props.Price) {
      return (
        <Text style={{ color: '#CCCCCC', fontSize: 25, fontWeight: 'bold' }}>{this.props.Price}</Text>
      )
    }
  }

  RenderLeft() {
    if (this.props.leftIconSrc || this.btn() || this.deliveryClock() || this.LeftText()) {
      return (
        <Left style={{ flex: 0.5 }} >
          {/* <Icon style={{ color: this.props.LeftIconColor }}> */}
            <AutoHeightImage
              width={15}
              source={this.props.leftIconSrc}
              style={{ alignSelf: 'center' }}
            />
            {/* <Image source={this.props.leftIconSrc} /> */}
          {/* </Icon> */}
          {this.btn()}
          {this.deliveryClock()}
          {this.LeftText()}
        </Left>
      );
    }
  }

  rightIconSrc() {
    if (this.props.rightIconSrc) {
      return (
        <View style={{ flexDirection: 'column' }}>
          <Icon style={{ color: 'black', marginLeft: 4 }}>
            <AutoHeightImage
              width={30}
              source={this.props.rightIconSrc}
              style={{ alignSelf: 'center' }}
            />
          </Icon>
        </View>
      );
    }
  }

  render() {
    return (
      <Card style={{ borderRadius: 5 }} >
        <CardItem style={{ borderRadius: 5 }}>
          {this.RenderLeft()}
          <Right style={{ flex: 1, alignContent: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold' }} >{this.props.header}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text note style={{ color: '#707070', fontSize: 15, fontWeight: 'bold', textAlign: 'right' }} numberOfLines={1} >{this.props.footer}</Text>
                {this.StarsComponent()}
              </View>
              {this.rightIconSrc()}
            </View>
          </Right>
          {this.cardRightIcon()}
        </CardItem>
      </Card>

    );
  }
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: '#FAC819',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: '#FAC819',
  }
});
