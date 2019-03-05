import _ from "lodash";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Form,
  Input,
  Textarea,
  Icon,
  Item,
  Text,
  Picker,
  Label,
  Left,
  Right,
  Title,
  Header,
  Button,
  Body
} from "native-base";
import { connect } from "react-redux";
import {
  addVehicleId,
  addVehicle,
  onChangeName,
  onChangeContact,
  onChangeEmail,
  onChangeCity,
  onChangeVehicleType,
  onChangeVehicleGear,
  onChangeVehicleWD,
  onChangeFuel,
  onChangeSeaters,
  onChangeVehicleRegistration,
  onChangeVehicleModel,
  onChangeComment,
  onChangePictureSrc
} from "../actions/registerActions";
import ImagePicker from "react-native-image-picker";

import { Buttonx } from "../../common";

class Register extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const vehicleId =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 16) +
      Math.random()
        .toString(36)
        .substr(2, 16);
    this.props.addVehicleId(vehicleId)
  }

  onRegisterUser() {
    this.props.addVehicle(this.props.registerData);
  }

  onValueChange(stateVal, value) {
    switch (stateVal) {
      case "city":
        this.props.onChangeCity(value);
        break;

      case "type":
        this.props.onChangeVehicleType(value);
        break;

      case "gear":
        this.props.onChangeVehicleGear(value);
        break;

      case "wheel_drive":
        this.props.onChangeVehicleWD(value);
        break;

      case "fuel":
        this.props.onChangeFuel(value);
        break;

      default:
        break;
    }
  }

  selectPhotoTapped(num) {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);
      if (response.didCancel) {
        // console.log("User cancelled photo picker");
      } else if (response.error) {
        // console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        // console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        const container = "container";
        const mime = "image/jpg";
        const ImagePath = response.uri;

        this.props.onChangePictureSrc(num, source);
      }
    });
  }

  render() {
    const {
      name,
      contact,
      email,
      city,
      type,
      gear,
      wheel_drive,
      fuel,
      seaters,
      vehicle_registration,
      vehicle_model,
      comment,
      pictureSrc
    } = this.props.registerData;

    const picData = Object.keys(pictureSrc).map(k => {
      return { [k]: pictureSrc[k] };
    });

    const picSrcOrder = [
      "pictureSrc1",
      "pictureSrc2",
      "pictureSrc3",
      "pictureSrc4",
      "pictureSrc5"
    ];

    const newPicData = [];

    picSrcOrder.map(element => {
      newPicData.push({ [element]: pictureSrc[element] });
    });

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Register Vehicle</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Form>
            {/* <Item>
              <Icon name="user" type="FontAwesome" />
              <Input
                label="Fullname"
                value={name}
                autoCorrect={false}
                placeholder="Full Name"
                placeholderTextColor="#aaaaaa"
                onChangeText={name => {
                  this.props.onChangeName(name);
                }}
              />
            </Item>
            <Item>
              <Icon name="phone" type="FontAwesome" />
              <Input
                label="Contact"
                value={contact}
                autoCorrect={false}
                keyboardType="numeric"
                placeholder="0777 777777"
                placeholderTextColor="#aaaaaa"
                onChangeText={contact => {
                  this.props.onChangeContact(contact);
                }}
              />
            </Item>
            <Item>
              <Icon name="envelope" type="FontAwesome" />
              <Input
                label="Email"
                value={email}
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="email@gmail.com*"
                placeholderTextColor="#aaaaaa"
                onChangeText={email => {
                  this.props.onChangeEmail(email);
                }}
              />
            </Item> */}
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={city}
                  onValueChange={city => this.onValueChange("city", city)}
                >
                  <Picker.Item label="Your City" value="" />
                  <Picker.Item label="Kampala" value="Kampala" />
                  <Picker.Item label="Wakiso" value="Wakiso" />
                  <Picker.Item label="Jinja" value="Jinja" />
                  <Picker.Item label="Ntungamo" value="Ntungamo" />
                  <Picker.Item label="Mbale" value="Mbale" />
                  <Picker.Item label="Bushenyi" value="Bushenyi" />
                  <Picker.Item label="Mbarara" value="Mbarara" />
                  <Picker.Item label="Budaka" value="Budaka" />
                  <Picker.Item label="Manafwa" value="Manafwa" />
                </Picker>
                <Picker
                  mode="dropdown"
                  width={{ width: 120 }}
                  note
                  selectedValue={type}
                  onValueChange={type => this.onValueChange("type", type)}
                >
                  <Picker.Item label="Car Type" value="" />
                  <Picker.Item label="Motorcyle" value="Motorcyle" />
                  <Picker.Item label="Sedan" value="Sedan" />
                  <Picker.Item label="Wagon" value="Wagon" />
                  <Picker.Item label="SUV" value="SUV" />
                  <Picker.Item label="Pickup" value="Pickup" />
                  <Picker.Item label="Van" value="Van" />
                  <Picker.Item label="Truck" value="Truck" />
                  <Picker.Item label="Lorry" value="Lorry" />
                  <Picker.Item label="Bus" value="Bus" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={gear}
                  onValueChange={gear => this.onValueChange("gear", gear)}
                >
                  <Picker.Item label="Gear Type" value="" />
                  <Picker.Item label="Automatic" value="Automatic" />
                  <Picker.Item label="Manual" value="Manual" />
                </Picker>
                <Picker
                  mode="dropdown"
                  width={{ width: 120 }}
                  note
                  selectedValue={wheel_drive}
                  onValueChange={wd => this.onValueChange("wheel_drive", wd)}
                >
                  <Picker.Item label="WD" value="" />
                  <Picker.Item label="2WD" value="2WD" />
                  <Picker.Item label="4WD" value="4WD" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={fuel}
                  onValueChange={fuel => this.onValueChange("fuel", fuel)}
                >
                  <Picker.Item label="Fuel Type" value="" />
                  <Picker.Item label="Petrol" value="Petrol" />
                  <Picker.Item label="Diesel" value="Diesel" />
                </Picker>
                <Input
                  placeholder="Seaters"
                  placeholderTextColor="#aaaaaa"
                  keyboardType="numeric"
                  value={seaters}
                  onChangeText={seaters => this.props.onChangeSeaters(seaters)}
                />
              </View>
            </Item>

            <Item>
              <Icon name="hashtag" type="FontAwesome" />
              <Input
                autoCorrect={false}
                autoCapitalize='characters'
                placeholder="Vehicle Registration Number"
                placeholderTextColor="#aaaaaa"
                onChangeText={vehicle_registration => {
                  this.props.onChangeVehicleRegistration(vehicle_registration);
                }}
              />
            </Item>

            <Item>
              <Icon name="ios-car" type="Ionicons" />
              <Input
                label="Vehicle"
                autoCorrect={false}
                value={vehicle_model}
                placeholder="Vehicle Model"
                placeholderTextColor="#aaaaaa"
                onChangeText={vehicle_model => {
                  this.props.onChangeVehicleModel(vehicle_model);
                }}
              />
            </Item>
            <Text />
            <Item>
              <Textarea
                value={comment}
                style={styles.inputStyles}
                rowSpan={5}
                bordered
                placeholder="Comment About Your Car"
                placeholderTextColor="#aaaaaa"
                onChangeText={comment => {
                  this.props.onChangeComment(comment);
                }}
              />
            </Item>
            <Text />
            <Item>
              {/* Pictures Start Here */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "column"
                }}
              >
                <View style={{ height: 150 }}>
                  <FlatList
                    horizontal
                    data={newPicData}
                    renderItem={({ item, index }) => {
                      const keys = Object.keys(item);
                      const myPictureSrc = keys[0];
                      return (
                        <TouchableOpacity
                          onPress={() => this.selectPhotoTapped(index + 1)}
                          index={index}
                          keyExtractor={index}
                        >
                          <View style={styles.pictureContainer}>
                            {_.isEmpty(item[myPictureSrc]) ? (
                              <View
                                style={{ flex: 1, justifyContent: "center" }}
                              >
                                <Icon
                                  type="FontAwesome"
                                  name="camera"
                                  style={{
                                    color: "grey",
                                    alignSelf: "center",
                                    fontSize: 24
                                  }}
                                />
                                <Text
                                  style={{
                                    color: "grey",
                                    alignSelf: "center",
                                    fontSize: 13
                                  }}
                                >
                                  {index + 1}
                                </Text>
                              </View>
                            ) : (
                              <Image
                                style={{ height: 150, width: 150 }}
                                source={item[myPictureSrc]}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
              {/* Pictures Stop Here */}
            </Item>

            <Text />
            <Item>
              <Buttonx
                onPress={() => {
                  this.onRegisterUser(this.props);
                  // this.props.navigation.navigate("list");
                }}
              >
                <Text>Submit</Text>
              </Buttonx>
            </Item>
            <Text />
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginRight: 10
  },
  inputStyles: {
    fontSize: 18,
    paddingRight: 15,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2,
    backgroundColor: "#ffffff"
  },
  pictureContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 110,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "transparent",
    margin: 4,
    overflow: "hidden"
  }
});

const mapStateToProps = state => {
  const registerData = state.Register;
  return { registerData };
};

export default connect(
  mapStateToProps,
  {
    addVehicleId,
    addVehicle,
    onChangeName,
    onChangeContact,
    onChangeEmail,
    onChangeCity,
    onChangeVehicleType,
    onChangeVehicleGear,
    onChangeVehicleWD,
    onChangeFuel,
    onChangeSeaters,
    onChangeVehicleRegistration,
    onChangeVehicleModel,
    onChangeComment,
    onChangePictureSrc
  }
)(Register);
