import { View, Text ,StyleSheet,Image} from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function Screen2({navigation}) {
    var [color,setColor] = useState(require('../assets/vs_red.png'))
  return (
    <View style={styles.container}>
        <View style={styles.productContainer}>
            <Image style={styles.image} source={color}></Image>
            <View style={styles.description}> Điện Thoại Vsmart Joy 3 Hàng chính hãng</View>
        </View>
        <View style={styles.chooseContainer}>
            <View style={styles.titleChoose}>Chọn một màu bên dưới:</View>
            <TouchableOpacity style={styles.bluePastel}
                onPress={() => setColor(require('../assets/vs_silver.png'))}
            ></TouchableOpacity>
            <TouchableOpacity style={styles.red}
                onPress={() => setColor(require('../assets/vs_red.png'))}
            ></TouchableOpacity>
            <TouchableOpacity style={styles.black}
                onPress={() => setColor(require('../assets/vs_black.png'))}
            ></TouchableOpacity>
            <TouchableOpacity style={styles.blue}
                onPress={() => setColor(require('../assets/vs_blue.png'))}
            ></TouchableOpacity>
            <TouchableOpacity style={styles.chooseButton}
                onPress={() => navigation.navigate('Screen1')}
            >XONG</TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        alignItems : 'center',
        backgroundColor : 'pink'
    },
    productContainer : {
        width : '100%',
        height : '30%',
        backgroundColor : 'white',
        flexDirection : 'row',
        
    },
    image : {
        width : 160,
        height : 180, 
        top : '9%',
        left : '2%',
    },
    description : {
        width : '60%',
        top : '20%',
        left : '2%',
    },
    chooseContainer : {
        width : '100%',
        height : '70%',
        backgroundColor : '#C4C4C4',
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    titleChoose : {
        width : '100%',
        height : 20,
        paddingLeft : '2%',
        
    },
    bluePastel : {
        height : 80,
        width : 80,
        backgroundColor : '#C5F1FB',
        shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5},
        borderRadius : 10,
    },
    red : {
        height : 80,
        width : 80,
        backgroundColor : '#F30D0D',
        shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5},
        borderRadius : 10,
    },
    black : {
        height : 80,
        width : 80,
        backgroundColor : 'black',
        shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5},
        borderRadius : 10,
    },
    blue : {
        height : 80,
        width : 80,
        backgroundColor : '#234896',
        shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5},
        borderRadius : 10,
    }, 
    chooseButton : {
        width : '80%',
        height : 50,
        backgroundImage: 'linear-gradient(0deg, rgba(25, 82, 226, 0.58) 0, rgba(25, 82, 226, 0.58) 100%)',
        borderRadius : 10,
        justifyContent : 'center',
        textAlign : 'center',
        fontWeight : 'bold',
        color : 'white',
        shadowColor : 'black',
        shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5},
        bottom : '2%'
    }
})