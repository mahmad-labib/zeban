import React, { Component } from 'react';
import { Image, Switch, TouchableOpacity } from 'react-native';
import { Left, Icon, Right, Text, ListItem, Form, Item, Picker, View, Button } from 'native-base';

export default class Listitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.Label,
            btnState: null,
        };
    }


    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    btnState() {
        const btnState = this.state;
        this.state.btnState ? this.setState({ btnState: false }) : this.setState({ btnState: true });
        console.log(btnState);
        // this.setState({ btnState: !btnState });
    }

    IconRender() {
        if (this.props.Icon) {
            return (
                <Icon style={{ flex: 1 }}>
                    <Image source={this.props.Icon} />
                </Icon>
            );
        }
        return null;
    }

    Switch() {
        if (this.props.ShowSwitch) {
            return <Switch value={this.props.btnState} onValueChange={this.props.onValueChange} />;
        }
    }

    Btn() {
        if (this.props.Btn) {
            return (
                <Button rounded style={{ backgroundColor: '#266A8F', height: 30 }}>
                    <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                        اختيار
                    </Text>
                </Button>
            )
        }
    }

    PickerBtn() {
        if (this.props.Label) {
            return (
                <View style={{ width: '70%', borderColor: '#279FBF', borderWidth: 1, borderRadius: 9, }}>
                    <Form style={{}}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined, height: 30 }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#279FBF" }}
                                placeholderIconColor="#279FBF"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label={this.props.Label} value="key0" />
                                <Picker.Item label={this.props.Label2} value="key1" />
                            </Picker>
                        </Item>
                    </Form>
                </View>
            );
        }
    }

    render() {
        return (
            <ListItem selected onPress={this.props.onPress}>
                <Left style={{ flex: 1 }}>
                    {this.IconRender()}
                    {this.PickerBtn()}
                    {this.Switch()}
                    {this.Btn()}
                    <Text style={{ color: '#B1B1B1' }}>{this.props.LeftData}</Text>
                </Left>
                <Right style={{ flex: 1 }}>
                    <Text style={{ color: '#727272', fontSize: 20 }}>{this.props.RightData}</Text>
                </Right>
            </ListItem>
        );
    }
}

