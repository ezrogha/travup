import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  FlatList,
  Text
} from "react-native";
import SwipeableParallaxCarousel from "react-native-swipeable-parallax-carousel";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Item,
  Button,
  Icon,
  Right,
  Header,
  Fab,
  Title
} from "native-base";

class Details extends Component {
  onCall = number => {
    Linking.openURL(`tel://${number}`).catch(err => alert("Error:", err));
  };
  render() {
    const features = [
      {
        key: 1,
        value: "Kampala",
        iconName: "city",
        iconType: "MaterialCommunityIcons"
      },
      {
        key: 2,
        value: `7 seats`,
        iconName: "seat-recline-extra",
        iconType: "MaterialCommunityIcons"
      },
      {
        key: 3,
        value: "petrol",
        iconName: "gas-station",
        iconType: "MaterialCommunityIcons"
      },
      {
        key: 4,
        value: "4WD",
        iconName: "steering",
        iconType: "MaterialCommunityIcons"
      },
      {
        key: 5,
        value: "automatic",
        iconName: "gears",
        iconType: "FontAwesome"
      }
    ];

    const datacarousel = [
      {
        id: 339964,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-1-2-DR.jpg"
      },
      {
        id: 315635,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-1-3-DR.jpg"
      },
      {
        id: 339403,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-2-2-DR.jpg"
      },
      {
        id: 339405,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-2-3-DR.jpg"
      },
      {
        id: 339406,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2018-GLS-SUV-CATEGORY-HERO-3-1-DR.jpg"
      },
      {
        id: 339407,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-3-2-DR.jpg"
      },
      {
        id: 339408,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-3-3-DR.jpg"
      },
      {
        id: 339409,
        imagePath:
          "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/gls/class-page/MBCAN-2019-GLS-SUV-CLASS-PAGE-3-4-DR.jpg"
      },
      
    ];

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{this.props.navigation.goBack()}}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Vehicle Details</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="gift" />
            </Button>
          </Right>
        </Header>
        <View style={{ backgroundColor: "#000" }}>
          <SwipeableParallaxCarousel
            titleColor="white"
            parallax
            navigation
            navigationColor="orange"
            navigationType="bars"
            data={datacarousel}
          />
        </View>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Vehicle Features</Text>
            </ListItem>
            <Item>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 10
                }}
              >
                <FlatList
                  horizontal
                  data={features}
                  renderItem={({ item, index }) => {
                    return (
                      <View
                        key={index}
                        style={{
                          width: 60,
                          marginRight: 10,
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Icon
                          style={{ alignSelf: "center", color: "#888888" }}
                          active
                          type={item.iconType}
                          name={item.iconName}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#888888",
                            alignSelf: "center"
                          }}
                        >
                          {item.value}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </Item>
            {/* <Item>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 10
                }}
              />
            </Item> */}
            <ListItem itemHeader>
              <Text>Tariff</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active type="FontAwesome" name="calendar" />
                </Button>
              </Left>
              <Body>
                <Text>Weekdays</Text>
              </Body>
              <Right>
                <Text>65 / hr</Text>
                {/* <Icon active name="arrow-forward" /> */}
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active type="MaterialIcons" name="weekend" />
                </Button>
              </Left>
              <Body>
                <Text>Weekends</Text>
              </Body>
              <Right>
                <Text>543 / hr</Text>
                {/* <Icon active name="arrow-forward" /> */}
              </Right>
            </ListItem>

            <ListItem itemHeader first>
              <Text>Owner</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active type="Entypo" name="old-phone" />
                </Button>
              </Left>
              <Body>
                <Text>0776564338</Text>
              </Body>
              <Right>
                {/* <Text>{phone}</Text>
                <Icon active name="arrow-forward" /> */}
              </Right>
            </ListItem>
            <ListItem />
          </List>
        </Content>
        <Fab
          active
          containerStyle={{ height: 50, width: 50 }}
          style={{ backgroundColor: "#34A34F" }}
          position="bottomRight"
          onPress={() => this.onCall("0777579402")}
        >
          <Icon type="FontAwesome" name="phone" />
        </Fab>
      </Container>
    );
  }
}

export default Details;
