import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import Axios from 'axios';


export default class MainActivity extends Component {
  static navigationOptions = {
    title: "Person Data"
  };

  constructor(props) {
    super(props);
    this.state = {
      TextInput_PersonData_Name: "",
      TextInput_PersonData_Alamat: "",
      TextInput_PersonData_Npwp: "",
      TextInput_PersonData_Phone: "",
      TextInput_PersonData_Email: ""
    };
  }

   InsertPersonDataRecordsToServer = () => {
     console.log(this.state.TextInput_PersonData_Name)
     console.log(this.TextInput_PersonData_Name.clear())
    Axios
      .post('http://192.168.43.74:8888/RetailBE/public/api/persondata', {
        nama: this.state.TextInput_PersonData_Name,
        alamat: this.state.TextInput_PersonData_Alamat,
        no_npwp: this.state.TextInput_PersonData_Npwp,
        phone: this.state.TextInput_PersonData_Phone,
        email: this.state.TextInput_PersonData_Email,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        // this.TextInput_PersonData_Name.clear();
        // this.TextInput_PersonData_Alamat.clear();
        // this.TextInput_PersonData_Npwp.clear();
        // this.TextInput_PersonData_Phone.clear();
        // this.TextInput_PersonData_Email.clear();
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };


  GoTo_Show_PersonDataList_Activity_Function = () => {
    this.props.navigation.navigate("PersonDataRead");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Pendaftaran Data Person{" "}
        </Text>

        <TextInput
          placeholder="Data Nama"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_PersonData_Name: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          ref={ref =>  this.TextInput_PersonData_Name = ref }
        />

        <TextInput
          placeholder="Data Alamat"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_PersonData_Alamat: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Data NPWP"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_PersonData_Npwp: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          
        />

        <TextInput
          placeholder="Data No Hp"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_PersonData_Phone: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Data Email"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_PersonData_Email: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />


        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertPersonDataRecordsToServer}
          
        >
          <Text style={styles.TextStyle}>
            {" "}
            TAMBAHKAN DATA PERSONDATA{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Show_PersonDataList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {" "}
            TAMPILKAN SELURUH DATA PERSON{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  },

  MainContainer_For_Show_PersonDataList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },

  TextInputStyleClass: {
    textAlign: "center",
    width: "90%",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#660066",
    borderRadius: 5
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: "90%",
    backgroundColor: "#660066"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center"
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});