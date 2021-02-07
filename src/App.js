import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, StatusBar, ScrollView, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      isLogin: false
    };
  }

  login = () => {
    if (!this.state.username && !this.state.email && !this.state.password && !this.state.repeatPassword) {
      Alert.alert('Error', 'Username, Email, Password dan Repeat Password harus diisi!')
    } else if (this.state.password != this.state.repeatPassword) {
      Alert.alert('Warning', 'Password dan Repeat password harus sama')
    } else {
      this.setState({
        isLogin: true
      })
    }
  }

  render() {
    const { username, email, password, repeatPassword, isLogin } = this.state;
    return (
      <ScrollView style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#a94dff" netWorkActivityIndicatorVisible={true} />

        <View style={styles.welcome}>
          <Text style={styles.textWelcome}>Welcome to</Text>
          <Text style={styles.textWelcome}>LakuDotKom</Text>
        </View>

        <View style={styles.containerSignUp}>

          <Text style={styles.sign}>Sign In</Text>

          {isLogin && (
            <Text style={{ color: '#ffffff' }}>Selamat anda berhasil Login : {username}</Text>
          )}

          <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={(username) => this.setState({ username })} />

          <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(email) => this.setState({ email })} />

          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={(password) => this.setState({ password })} />

          <TextInput placeholder="Repeat Password" secureTextEntry={true} style={styles.input} value={repeatPassword} onChangeText={(repeatPassword) => this.setState({ repeatPassword })} />

          <TouchableOpacity style={styles.btn} onPress={() => this.login()}>
            <Text style={styles.textBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.link}>

          <TouchableOpacity>
            <Text style={styles.textLink}>Already your Account?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textLink}>Forgot Password</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a94dff'
  },
  welcome: {
    marginTop: 15,
  },
  textWelcome: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  containerSignUp: {
    marginTop: 38,
    marginHorizontal: 24
  },
  sign: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700'
  },
  input: {
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    fontSize: 16
  },
  btn: {
    backgroundColor: '#00a6ff',
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 30,

  },
  textBtn: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  link: {
    marginTop: 30
  },
  textLink: {
    textAlign: 'center',
    marginTop: 5,
    color: '#ffffff',
    fontWeight: '300'
  }
})

