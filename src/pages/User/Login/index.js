import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      senha: ''
    }
  }
  _OnPress = () =>{

    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          label='E-mail'
          containerStyle={styles.input}
          placeholder='bancaalavancagem@email.com'
          leftIcon={
            <Icon
              name='user'
              size={20}
              color='black'
            />
          }
          onChangeText={value => this.setState({ login: value })}

        />
        <Input
          secureTextEntry={true}
          label='Senha'
          containerStyle={styles.input}
          placeholder='*********'
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='black'
            />
          }
          onChangeText={value => this.setState({ senha: value })}

        />
        <TouchableOpacity
        style={styles.button}
        onPress={this._OnPress}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Text style={styles.textButton}>Recuperar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login;