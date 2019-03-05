import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Header, Container, Content, Body, Title } from "native-base";

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <Text style={txtStyle}> Home Screen </Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
          />
        </Content>
      </Container>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={containerStyle}>
        <Text style={txtStyle}>Details Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const txtStyle = {
  fontSize: 32
};

const containerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Home"
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerTitle: "Details"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
