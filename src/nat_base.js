import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Left,
  Body,
  Icon,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          {/* <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left> */}
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="default" secureTextEntry={true} />
            </Item>
            <Text />
            <Button block info>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
