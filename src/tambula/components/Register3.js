import _ from "lodash";
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { Button, Icon, Title, Left, Header, Body, Container, Content, Right } from 'native-base';
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import {
  addVehicleId,
  addVehicle,
  onChangeCity,
  onChangeVehicleType,
  onChangeVehicleGear,
  onChangeVehicleWD,
  onChangeFuel,
  onChangeSeaters,
  onChangeVehicleRegistration,
  onChangeVehicleBrand,
  onChangeVehicleMake,
  onChangeVehicleModel,
  onChangeComment,
  onChangePictureSrc,
  onRegisterVehicle
} from "../actions/registerActions";

class Register extends Component {
  
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

  registerVehicle = () => {
    const {registerData, userId} = this.props
    this.props.onRegisterVehicle(registerData, userId)
  }

  render() {
    const {
      pictureSrc,
      city,
      type,
      gear,
      wheel_drive,
      fuel,
      seaters,
      vehicle_registration,
      vehicle_brand,
      vehicle_model,
      vehicle_make,
      comment
    } = this.props.registerData;
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
            <Button transparent>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Register Vehicle</Title>
          </Body>
          <Right>
             <Button transparent onPress={this.registerVehicle.bind(this)}>
              <Icon type='Entypo' name='thumbs-up' />
            </Button>
          </Right>
        </Header>
        <Content>
        <View style={styles.itemContent}>
          <View style={styles.iconContain}>
            <Icon name="ios-pin" style={{ color: "#aaa" }} />
          </View>
          <Picker
            mode="dropdown"
            selectedValue={city}
            onValueChange={city => this.onValueChange("city", city)}
            style={styles.picker}
          >
            <Picker.Item label="Location" value="" />
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
          <View style={{ flex: 50 }} />
        </View>

        <View style={styles.itemContent}>
          <View style={styles.iconContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="car-side"
              style={{ color: "#aaa" }}
            />
          </View>
          <Picker
            mode="dropdown"
            selectedValue={type}
            onValueChange={type => this.onValueChange("type", type)}
            style={styles.picker}
          >
            <Picker.Item label="Vehicle type" value="" />
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
          <View style={{ flex: 50 }} />
        </View>

        <View style={styles.itemContent}>
          <View style={styles.iconContain}>
            <Icon type="FontAwesome" name="gears" style={{ color: "#aaa" }} />
          </View>
          <Picker
            mode="dropdown"
            selectedValue={gear}
            onValueChange={gear => this.onValueChange("gear", gear)}
            style={styles.picker}
          >
            <Picker.Item label="Gear" value="" />
            <Picker.Item label="Automatic" value="Automatic" />
            <Picker.Item label="Manual" value="Manual" />
          </Picker>
          <View style={{ flex: 50 }} />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="steering"
              style={{ color: "#aaa" }}
            />
          </View>
          <Picker
            mode="dropdown"
            selectedValue={wheel_drive}
            onValueChange={wd => this.onValueChange("wheel_drive", wd)}
            style={styles.picker}
          >
            <Picker.Item label="WD" value="" />
            <Picker.Item label="2WD" value="2WD" />
            <Picker.Item label="4WD" value="4WD" />
          </Picker>
          <View style={{ flex: 50 }} />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="gas-station"
              style={{ color: "#aaa" }}
            />
          </View>
          <Picker
            mode="dropdown"
            selectedValue={fuel}
            onValueChange={fuel => this.onValueChange("fuel", fuel)}
            style={styles.picker}
          >
            <Picker.Item label="Fuel type" value="Petrol" />
            <Picker.Item label="Petrol" value="Petrol" />
            <Picker.Item label="Diesel" value="Diesel" />
          </Picker>
          <View style={{ flex: 50 }} />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="seat-recline-extra"
              style={{ color: "#aaa" }}
            />
          </View>
          <TextInput
            placeholder="Seaters"
            placeholderTextColor="gray"
            keyboardType="numeric"
            value={seaters}
            onChangeText={seaters => this.props.onChangeSeaters(seaters)}
            style={{
              ...styles.inputStyles,
              marginTop: 5,
              marginLeft: 0,
              flex: 1
            }}
          />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon type="FontAwesome" name="hashtag" style={{ color: "#aaa" }} />
          </View>
          <TextInput
            placeholder="Plate number"
            placeholderTextColor="gray"
            autoCorrect={false}
            autoCapitalize="characters"
            value={vehicle_registration}
            onChangeText={vehicle_registration => {
              this.props.onChangeVehicleRegistration(vehicle_registration);
            }}
            style={{ ...styles.inputStyles, marginLeft: 0, flex: 1 }}
          />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="seat-recline-extra"
              style={{ color: "#aaa", opacity: 0 }}
            />
          </View>
          <TextInput
            placeholder="Vehicle brand"
            placeholderTextColor="gray"
            value={vehicle_brand}
            onChangeText={vehicle_brand => {
              this.props.onChangeVehicleBrand(vehicle_brand);
            }}
            style={{ ...styles.inputStyles, marginLeft: 0, flex: 1 }}
          />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="seat-recline-extra"
              style={{ color: "#aaa", opacity: 0 }}
            />
          </View>
          <TextInput
            placeholder="Vehicle model"
            placeholderTextColor="gray"
            value={vehicle_model}
            onChangeText={vehicle_model => {
              this.props.onChangeVehicleModel(vehicle_model);
            }}
            style={{ ...styles.inputStyles, marginLeft: 0, flex: 1 }}
          />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon
              type="MaterialCommunityIcons"
              name="seat-recline-extra"
              style={{ color: "#aaa", opacity: 0 }}
            />
          </View>
          <TextInput
            placeholder="Vehicle make"
            placeholderTextColor="gray"
            value={vehicle_make}
            onChangeText={vehicle_make => {
              this.props.onChangeVehicleMake(vehicle_make);
            }}
            style={{ ...styles.inputStyles, marginLeft: 0, flex: 1 }}
          />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.iconInputContain}>
            <Icon
              type="MaterialIcons"
              name="comment"
              style={{ color: "#aaa" }}
            />
          </View>
          <TextInput
            placeholder="Comment about the car"
            placeholderTextColor="gray"
            value={comment}
            onChangeText={comment => {
              this.props.onChangeComment(comment);
            }}
            style={{
              ...styles.inputStyles,
              marginLeft: 0,
              flex: 1,
              marginBottom: 10
            }}
            multiline
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View
            style={{
              height: 150,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 20
            }}
          >
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
                        <View style={{ flex: 1, justifyContent: "center" }}>
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
        </Content>
        {/* <TouchableOpacity style={styles.loginBtnStyles}>
          <Text style={styles.mainLoginTextStyles}>List Vehicle</Text>
        </TouchableOpacity> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles: {
    borderColor: "#777",
    borderBottomWidth: 1,
    paddingLeft: 0,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    alignSelf: "stretch",
    fontSize: 16
  },
  loginBtnStyles: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ddd"
  },
  mainLoginTextStyles: {
    fontSize: 15,
    color: "#333"
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
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  iconContain: {
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    width: 30
  },
  iconInputContain: {
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 25,
    width: 30
  },
  picker: {
    flex: 70
  }
});

const mapStateToProps = state => {
  const registerData = state.Register;
  const userId = state.Login.userId
  return { registerData, userId };
};

export default connect(
  mapStateToProps,
  {
    addVehicleId,
    addVehicle,
    onChangeCity,
    onChangeVehicleType,
    onChangeVehicleGear,
    onChangeVehicleWD,
    onChangeFuel,
    onChangeSeaters,
    onChangeVehicleRegistration,
    onChangeVehicleModel,
    onChangeVehicleBrand,
    onChangeVehicleMake,
    onChangeComment,
    onChangePictureSrc,
    onRegisterVehicle
  }
)(Register);
