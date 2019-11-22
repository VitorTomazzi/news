import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('TabScreen');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={StyleSheet.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>LOGIN</Text>

          <TextInput
            style={styles.textInput}
            placeholder="username"
            onChangeText={username => this.setState({username})}
          />

          <TextInput
            style={styles.textInput}
            placeholder="password"
            onChangeText={password => this.setState({password})}
          />

          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
    fetch('http://192.168.64.2:3000/newsapp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('TabScreen');
        } else {
          alert(res.message);
        }
      })
      .done();
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
});
