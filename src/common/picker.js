import React, { Component } from 'react';
import { View, Picker } from 'react-native';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       user: ''
    };
  }

  updateUser = (user) => {
    this.setState({
      user
    });
  }

  render() {
    const cities = ['Your City*', 'Kampala', 'Wakiso', 'Jinja', 'Ntungamo', 'Mbale', 'Bushenyi', 'Mbarara'];
    const brands = ['Car Type*', 'Motorcycle', 'Sedan', 'Wagon', 'SUV', 'Pickup', 'Van', 'Truck', 'Lorry', 'Bus'];
    return (
      <View>
        <Picker style={{ width: 200, height: 50 }} selectedValue={this.props.selectedValue} onValueChange={this.props.onValueChange} mode="dialog" placeholder="Pick City">
          {this.props.param === 'city' ?  
            cities.map((city, index) => {
              return (
                index === 0 ?
                <Picker.Item label={city} key={index} style={{ TextColor: '#aaaaaa' }} /> :
                <Picker.Item label={city} value={city} key={index} />);
            }) :
            brands.map((brand, index) => {
              return (
              index === 0 ? 
              <Picker.Item label={brand} key={index} style={{ TextColor: '#aaaaaa' }} /> :
              <Picker.Item label={brand} value={brand} key={index} />);
            })
            }
        </Picker>
      </View>
    );
  }
}
