import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image,I18nManager} from 'react-native';
import { Container, Text , Content, Form, Item, Input, Label,Button}from 'native-base';

import Text2 from "../../../components/Text2";

import AuthTemplate from "../../auth/authTemplate";
import Colors from "../../../constants/colors";
import server from "../../../constants/config"
import { strings,isRTL } from '../../../i18n';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories:[{
                id:1,
                name:'first category'
            }]
        }
    }
    componentDidMount(){
        // Imprtant Read it --------------------------------->
        /*
        (here we use fetch function to get data from server and we set it into
        state via function called setState
        and we have constant for the server imported
        use it  : server.url
      )
        --hint
        please note that hint is created for you to search for the names mentioned here
        and don't always ask project owner make google your best friend
        */
    }
    render() {
        return (
            <View style={style.Container}>
                <Image source={require('./logo.png')} style={style.image}/>
                <Content style={{backgroundColor: 'white'}}>
                    <Form style ={style.input}>
                        <Item floatingLabel>
                            <Label style={style.label}><Text2 text="login.email" style={{color:'#000',fontSize:15}}/></Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={style.label}><Text2 text="login.password" style={{color:'#000',fontSize:15}}/></Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <View style={{flexDirection:'row'}}>
                            <Label onPress={()=>{
                                this.props.navigation.navigate('Forget')
                            }} style ={style.label2}><Text2 text="login.forget" style={{color:'gray',fontSize:13}}/> </Label>
                            <Label style ={style.label2}><Text2 text="login.help" style={{color:'gray',fontSize:13}}/> </Label>
                        </View>
                        <Button onPress={()=>this.props.navigation.navigate('App')} large rounded style={style.button}>

                            <Text2 text="login.login" style={{color:'white',fontSize:17}}/>
                        </Button>
                        <TouchableOpacity style={style.opacity} onPress={()=>this.props.navigation.navigate('SignUp')}>
                            <Text2 text="login.new_email" style={{color:'#2fb2c2',fontSize:17}}/>
                        </TouchableOpacity>

                    </Form>
                </Content>

            </View>

        );
    }
}



const style=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        height:'100%'
    },

    input:{
        marginTop:40,

    },
    label:{
        marginTop:-5,
    },
    label2:{
        paddingBottom:30,
    },
    button:{
        alignSelf: 'center',
        padding:15,
        backgroundColor:'#2fb2c2',

    },
    opacity:{
        paddingTop: 15,
        alignSelf: 'center',
        fontSize:20,
    },
    image:{
        height:200,
        width:200,
        alignSelf: 'center',
        marginTop:30
    }


});
