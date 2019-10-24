import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import API from './api'

export default class App extends React.Component {
  state = {
    productInput: '',
    price: ''
  }

  findPrice = () => {
    API(this.state.productInput.toLocaleLowerCase()).then((data) => {
      this.setState({ price: data.price })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>

          <Text style={styles.price}>{this.state.price}</Text>

          <TextInput
            style={styles.textbox}
            autoCapitalize="none"
            value={this.state.productInput}
            onChangeText={(text) => { this.setState({ productInput: text }) }}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => this.findPrice()}
          >
            <Text style={styles.buttonText}>Find Price</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 20
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 40,
    backgroundColor: '#428bca',
    borderColor: '#428bca'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#FFF'
  },
  price: {
    alignSelf: 'center',
    fontSize: 24
  }
});
