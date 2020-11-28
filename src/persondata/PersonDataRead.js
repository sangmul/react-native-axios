
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Axios from 'axios';

export default class PersonDataRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false
    };
  }

  static navigationOptions = {
    title: "Daftar Person Data"
  };

  componentDidMount() {
    console.log("halo");
    this.getPersonData()
  }

  //   Get Api
  getPersonData = async () => {
    try {
      const response = await Axios.get(`http://10.83.8.68:8888/RetailBE/public/api/persondata`)
      console.log(JSON.stringify(response));
      this.setState({ isError: false, isLoading: false, data: response.data.data })
      // console.log(response.data);
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    //  If load data
    if (this.state.isLoading) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }
    // If data not fetch
    else if (this.state.isError) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <Text>Terjadi Error Saat Memuat Data</Text>
        </View>
      )
    }
    // If data finish load
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <View style={styles.viewList}>
              <View>
              {/* <Image source={{ uri: `${item.avatar_url}` }} style={styles.Image} /> */}
                <Text style={styles.textItemName}> {item.nama}</Text>
                <Text style={styles.textItemAddress}> {item.alamat}</Text>
              </View>
          </View>
        }
        keyExtractor={({ id }, index) => index.toString()}
      />
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
  },

  viewList: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center'
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40
  },
  textItemName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16
  },
  textItemAddress: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'grey'
  },
  buttonStyle: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  width: '100%',
  marginTop: 16,
  }
});