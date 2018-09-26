import React, { Component } from 'react';
import { Picker } from 'react-native';
import { View } from 'native-base';
import AppTemplate from '../appTemplate';


export default class TimePicker extends Component {
    state={
        language:{
            '1'
        }
    }
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="تحديد وقت التسليم">
           <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
           </View>
      </AppTemplate>
    );
  }
}


