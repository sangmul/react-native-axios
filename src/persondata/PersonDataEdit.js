import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Button,
  Text,
  Platform,
  TouchableOpacity,
  ListView,
  ActivityIndicator
} from "react-native";
import Axios from 'axios';

export default class PersonDataEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_Nama: "",
      TextInput_Alamat: "",
      TextInput_Npwp: "",
      TextInput_Phone: "",
      TextInput_Email: "",

    };
  }

  componentDidMount() {
    this.setState({
    //   TextInput_ID: this.props.navigation.state.params.ID,
      TextInput_Nama: this.props.navigation.state.params.NAMA,
      TextInput_Alamat: this.props.navigation.state.params.ALAMAT,
      TextInput_Npwp: this.props.navigation.state.params.NPWP,
      TextInput_Phone: this.props.navigation.state.params.PHONE,
      TextInput_Email: this.props.navigation.state.params.EMAIL,
    });
  }

  static navigationOptions = {
    title: "EditPersonDataRecordActivity"
  };

  UpdatePersonDataRecord = () => {
    fetch("http://10.30.30.103:8888/RetailBE/public/api/persondata/{id}", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nama: this.state.TextInput_Nama,
        alamat: this.state.TextInput_Alamat,
        no_npwp: this.state.TextInput_Npwp,
        phone: this.state.TextInput_Phone,
        email: this.state.TextInput_Email,
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server updating records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  DeletePersonDataRecord = () => {
    fetch("http://10.30.30.103:8888/RetailBE/public/api/persondata/{id}", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.TextInput_ID
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });

    this.props.navigation.navigate("PerseonDataMain");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Edit Person Data Record Form{" "}
        </Text>

        <TextInput
          placeholder="Nama Costumer"
          value={this.state.TextInput_Nama}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Nama: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Alamat Costumer"
          value={this.state.TextInput_Alamat}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Alamat: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="NPWP"
          value={this.state.TextInput_Npwp}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Npwp: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="No HP"
          value={this.state.TextInput_Phone}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Phone: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdatePersonDataRecord}
        >
          <Text style={styles.TextStyle}> UPDATE DATA PERSON </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeletePersonDataRecord}
        >
          <Text style={styles.TextStyle}> DELETE DATA PERSON </Text>
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
    borderColor: "#30cb63",
    borderRadius: 5
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: "90%",
    backgroundColor: "#30cb63"
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