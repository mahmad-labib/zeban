import React, { Component } from 'react';
import { Input, Item, View, Text } from 'native-base';


export default class FormInput extends Component {

  state = {
    value: ''
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ textAlign: 'right', color: '#266A8F', fontSize: 20, fontWeight: 'bold', marginTop: 5, marginBottom: 5 }}>{this.props.label}</Text>
        </View>
        <Item>
          <View style={{ flexDirection: 'row' }}>
            <Input onChangeText={this.props.onChangeText} value={this.props.value} style={{ borderWidth: 0.5, borderRadius: 12, borderColor: '#266A8F' }} />
          </View>
        </Item>
      </View>
    );
  }
}

const styles = {
  item: {
    borderBottomWidth: 0,
  }
}