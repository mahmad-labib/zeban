import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base';

export default class AuthTemplate extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Auth Template</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    { this.props.children }
                </Content>
            </Container>
        );
    }
}