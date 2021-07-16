import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:30,
        backgroundColor:colors.primary
    },
    input:{
        width:'90%'
    },
    button:{
        width:'85%',
        borderWidth:1,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.secundary
    },
    textButton:{
        fontSize:16
    },
    container2:{
        flexDirection: 'row', 
        justifyContent:'space-between',
        width:'80%',
    },
    textStyleMoney:{
        fontSize:26,
        color: colors.white,
        borderColor:colors.success,
        textAlign:'center'
    },
    textStyle:{
        fontSize:20,
        color: colors.white,
        borderColor:colors.success,
        textAlign:'center',
        paddingTop:10
    },
    buttonMoney:{
        borderWidth:1,
        borderRadius:50,
        width:70,
        height:70,
        borderColor:colors.white,
        alignItems:'center',
        justifyContent:'center'
    },
    item: {
        padding:10,
        flexDirection: 'row',  
        alignItems:'center',
        justifyContent:'space-between' 
      },
      title: {
        fontSize: 32,
      },
      list:{
          paddingTop:20,
          width:'90%'
      },
      separador:{
          backgroundColor:colors.white,
          height: 1
      },
      containerItem:{
          alignItems:'flex-start',
          paddingLeft: 10,
          paddingBottom:10
      }

});

export default styles;
