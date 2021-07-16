import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

// import { Container } from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bancaReal: 10.00,
      bancaDolar: 3.30,
      bancaEuro: 0.00,
      dataBanca: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          operacao: 'BACK',
          bancaInicial:100.00,
          lucro: 50.35,
          diasOperando: 10 + ' dias',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          operacao: 'LAY',
          bancaInicial:119.55,
          lucro: 76.42,
          diasOperando: 8 + ' dias',
        },
      ]
    }
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Avatar
        rounded
        size="medium"
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieitr1-efoepgpAAAn8bVIDd-7AUVmAGKrlJ-iKuyqCHilmlkJ569yJslWMFR0lske6w&usqp=CAU',
        }}
      />
      <View style={styles.containerItem}>
        <Text style={{ ...styles.textStyle, fontSize: 18 }}>
          {item.operacao}
          </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'88%' }}>
          <Text style={{ ...styles.textStyle, fontSize: 12 }}>
            {"Inicial: " + item.bancaInicial.toFixed(2)}
          </Text>
          <Text style={{ ...styles.textStyle, fontSize: 12 }}>
            {"Lucro: " + item.lucro.toFixed(2)}
          </Text>
          <Text style={{ ...styles.textStyle, fontSize: 12 }}>
            {"Operando: " + item.diasOperando}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.buttonMoney}>
              <Text style={styles.textStyleMoney}>
                R$
           </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              {this.state.bancaReal.toFixed(2)}
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.buttonMoney}>

              <Text style={styles.textStyleMoney}>
                $
           </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              {this.state.bancaDolar.toFixed(2)}
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.buttonMoney}>

              <Text style={styles.textStyleMoney}>
                EUR
           </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
              {this.state.bancaEuro.toFixed(2)}
            </Text>
          </View>


        </View>
        <View style={styles.list}>
          <FlatList
            data={this.state.dataBanca}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
              return (<View style={styles.separador} />);
            }}
          />
        </View>

      </View>
    )
  }
}

export default Home;