import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
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
        width:'85%',
        paddingTop:10
    },

});

export default styles;
