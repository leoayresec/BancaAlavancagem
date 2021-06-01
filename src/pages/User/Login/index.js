import React from 'react';
import { View, Text } from 'react-native';
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
        />
        <Input
          secureTextEntry={true}
          label='Senha'
          containerStyle={styles.input}
          placeholder='*********'
          leftIcon={
            <Icon
              name='unlock-alt'
              size={20}
              color='black'
            />
          }
        />
      </View>
    )
  }
}

export default Login;