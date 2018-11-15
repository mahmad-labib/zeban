import React, { Component } from 'react';

import { Header, Left, Button, Icon, Right, Body, Title, Container, Content } from 'native-base';


export default class AppTemplate extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#F1F1F1' }}>
        <Header style={{ backgroundColor: '#266a8f' }}>
          <Left style={{ flex: 0.5 }} >
            <Button transparent>
              <Icon
                onPress={() => {
                  this.props.navigation.goBack();
                }} name='arrow-left' type='FontAwesome' style={{ color: 'white' }} />
            </Button>
          </Left>

          <Body style={{ flex: 1, justifyContent: 'center' }} >
            <Title style={{ color: 'white', alignSelf: 'center' }}>{this.props.name}</Title>
          </Body>
          <Right style={{ flex: 0.5 }} />
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}
