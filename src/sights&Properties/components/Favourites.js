import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title } from 'native-base';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Favourites</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Favourites;
