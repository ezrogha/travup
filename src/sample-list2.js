import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  List,
  ListItem,
  Text,
  Icon,
  Button,
  Body,
  Title,
  Thumbnail
} from "native-base";
import { TouchableOpacity } from "react-native";

class ListExample extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>The List</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Icon name="ios-add-circle-outline" type="Ionicons" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "data:image/png;base64,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"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>ReactJs</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuPlXDxN2i8JT4pr9CYgnK42Sp9xpbdLD0sjGCRSBznWpVJQa"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Redux</Text>
                <Text note>
                  Doing what you like will always keep you happy ...
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "data:image/jpeg;base64,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"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Abstract Black</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "data:image/png;base64,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"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Gold Crown</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMV98ZDFWEIn_VjucG0rUj83mUicvFHKgVfSF0Wp-sxtJ3gLMFw"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Batman</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPd9DG14tT54gwV8XDmlzKUsMqTEkPd06d3INeKGP8SOpWosIoQ"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Bio-Hazard</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGCzXX09eJR_wMP_vmc9woIVMeTc8_bif65hhzLN3_prG5k3n"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Pepsi</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA21BMVEUAAAD///8AAAL5+voJBgUkKSskNUCgqq8MDxATFBTO0tTIzM1FTlYyOT4PExMjJyt+hore4OaLk5Q4SU8jLTgrOEGXoKNbXV4/T1kgICCQmJgsP0rZ3t7u8fTq7OwoOUAAGCgWLTspMzi7wcVQXmYkNz0AHipjcne3vLocMDoADR+doKJPU1QiJy0pLTIzRU5ve4IiKShtb3KssbNEWWQyNDV4iI+Ci41kZ2aKmZ9cam5DSEu0t748Rk4cNEDO1tMAExp1eHkTITJmaGyChIJSZG8SICYWHB8KJy6JzfdtAAADvElEQVR4nO3ZbXOaShQH8MVVUdBqNCLKslagPlQN3Ky9CsYY2hj7/T/RxRqvQGOm0xeRGf+/N7IHdc6c2d3ZB0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLn249wMmmE08KlE8m85YibJt+wDedM7a4unU6G5bqcqouhW9SHrh7UJyqz7y+dU1Y9U951i5a1I89+qbSrVrbeiI2ml04ri8obqj0WC/n988Tf7T9K1ahcSv2yeWVRm7LK+Din236B5H49rYKFopUvl1Ym/aCjgfV/S/F7x8e8M1S13UVyyqqpJPp3pyb3m6dGVC2/9PEpZVbBFD9r5HXkEbIzu3rsbSVQvUtklVEbJTYGCalSocf7UmX44Hx0Spm14OtWvN2WxDwxTelaNG3lCERoo5doP0vCqcUDneYo+NCMsmvCisl94CQqlpWIVOv+HYEIT3UsIqJiVROR8ljMPzCj7Fpyo5aMqFRs3WTIqg+x2IqMxDifCOQYnWz15Jd2TT85MK8Uq7eSAYtTLV0s8lNL9bWrtOLDVJ+ZmlGx3E4yOGiky3eN7tV5qi5Lamrbx0JyYfUSzrHnIYGW7jJ1bmr6up0MvjhBqqbXqFlPLgqeuiblQnAWJsKWM8ShPHlpJPZ9K1uSmM3UG4mK+Lir+gGKFa2g4sVa3kim7bvDtayYkhq7sJjaDtbwZBY6px7UpVSRHaM/f/zq2DcSP91XtFUXq1Iyc7xjFf5RJS6GhjHuN/Xi4Kuncmly/Fpd/ZI/8w9XpNb0Z4enNqe25xq9orUjtbU7HowbjKrfDi+FuL1cjpmRL2qHFXyX3jSahtE7XPCQstXrfzZkbh7WEKyBYkVamv6JkI5qyk2jdxu/ySlY42jqovuhOOWV2aUSzJI7J9ojt5nt9L7U0tPSp7vxYMjUDhnZfVyIRfK67C6Y9zjbVyMX3+Psn/O7l2jqCrmHQ4dfVp7mD57Ovy899W02wMLhIJD198fYkgfoWK+qnjDee1+i4jtmrKNg8e7RHtt8x77wxJMXzbMvFXaLQRhXF1ol/+Y9ao2zVvWN+DWrC3l/vPxbuUK6Kbbe+sFVu5ft34+spgqVB+hXKVGPWjXsB81bnfpWOVSo6hQxt78l5/wrP9hCW4TLZfgsVM7F9rGKg5kzypXA04St2KqqjDTPcFGqs6IRmKut17quu03DaFU7r0F4R75cxoL9D+VSnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwF/4DmMJUPxq27vQAAAAASUVORK5CYII="
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Mercedes</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar onPress={()=>this.props.navigation.navigate('Details')}>
              <Left>
                {/* <Thumbnail
                  source={{
                    uri:
                      "data:image/jpeg;base64,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"
                  }}
                /> */}
              </Left>
              <Body>
                <Text>Lambo</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem>
              <Text>Item 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default ListExample;
