import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropertyItem from './PropertyItem';
import {
  Container,
  Header,
  Button,
  Body,
  Left,
  Title,
  Right,
  Content,
  Icon
} from "native-base";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="md-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Properties</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Favourites')}>
              <Icon name="bookmark" />
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#ddd", }}>
          <View style={styles.container}>
            <PropertyItem { ...this.props } />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 7,
  }
});

export default Properties;
