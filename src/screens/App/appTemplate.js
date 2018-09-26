import React, { Component } from 'react';

import{Header,Left,Button,Icon,Right,Body,Title,Container,Content } from 'native-base'


export default class AppTemplate extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#F1F1F1'}}>
       <Header style={{backgroundColor:'#266a8f',color:'white'}}>
          <Left style={{flex:0.1}} >
            <Button transparent>
                <Icon onPress={() => {
                  this.props.navigation.openDrawer();
                }} name='menu' color="white" style={{ color: 'white' }} />
              </Button>
          </Left>
              
          <Body style={{flex:1,justifyContent: 'center'}} >
            <Title style={{color:'white'}}>{this.props.name}</Title>
          </Body>
          <Right style={{flex:0.1}} />
        </Header>
       <Content  >
              {this.props.children}     
       </Content>
      </Container>
    );
  }
}

const styles = {
  box:{
        flexDirection:'row',
        marginTop:'2%',
        marginRight:20,
        marginLeft:20,
        width: '80%',
        height:150,
        borderRadius:12,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        alignItems:'center',
        justifyContent:'center'
  },
  image:{
    marginTop:10,
    marginLeft:10,
        width: '90%',
        height: '90%',
        alignSelf:'center',
        color:'#1B5686'
        },
    text:{
      marginTop:'9%',
      color:'#266A8F',
      fontSize:18
      },
    btn:{
      alignSelf:'center',
      backgroundColor:'#15588D',
      paddingRight:'18%',
      paddingLeft:'18%'
    }
}
