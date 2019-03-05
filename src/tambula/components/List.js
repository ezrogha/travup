import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/vehiclesActions';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Body, Right, Button, Title, Icon } from 'native-base';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
    // this.props.fetchVehicles()
  }

  componentWillUpdate(){
    
  }

  render() {
    this.props.fetchVehicles()
    return (
      <Container>
        <Header>
          <Body>
            <Title>List</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Register')}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <ScrollView>
        <Text> User List </Text>
        <Text>{JSON.stringify(this.props.listData.vehicles)}</Text>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyles: {
    fontSize: 23
  }
})

const mapStateToProps = state => {
  return {
    listData: state.Vehicles
  }
}

export default connect(mapStateToProps, {
  fetchVehicles
})(List);
