import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/vs_blue.png')}></Image>
      </View>
      <View style={styles.description}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</View>
      <View style={styles.evalueContainer}>
        <View style={styles.starContainer}>
            <Image style={styles.star} source={require('../assets/star.png')}></Image>
            <Image style={styles.star} source={require('../assets/star.png')}></Image>
            <Image style={styles.star} source={require('../assets/star.png')}></Image>
            <Image style={styles.star} source={require('../assets/star.png')}></Image>
            <Image style={styles.star} source={require('../assets/star.png')}></Image>
        </View>
        <TouchableOpacity style={styles.evalue}>(Xem 828 đánh giá)</TouchableOpacity>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.price}>1.790.000 đ</View>
        <View style={styles.listedPrice}>1.790.000 đ</View>
      </View>
      <View style={styles.slogan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</View>
      <TouchableOpacity style={styles.chooseColor}>4 MÀU-CHỌN MÀU
        <Image style={styles.chooseColorIcon} source={require('../assets/Vector.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buy}
        onPress={() => navigation.navigate('Screen2')}
      >CHỌN MUA</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer : {
    width: '80%',
    height: '50%',
    top: '5%',
  },
  image :{
    width: '100%',
    height: '100%',
  },
  description : {
    width: '80%',
    height : 20,
    marginTop: '10%',
    alignItems: 'center',
  },
  evalueContainer : {
    width: '80%',
    height : 40,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems : 'space-between'
  },
  starContainer : {
    width: '50%',
    height : '100%',
    flexDirection: 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  star :{
    width: 25,
    height: 25,
  },
  evalue : {
    width: '50%',
    height : '100%',
    textAlign: 'center',
    justifyContent : 'center',
  },
  price : {
    width : '50%',
    height : '100%',
    justifyContent  : 'center',
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 25,
  },
  listedPrice : {
    width : '50%',
    height : '100%',
    justifyContent  : 'center',
    textAlign : 'center',
    textDecorationLine: 'line-through',
  },
  priceContainer : {
    width: '80%',
    height : 40,
    flexDirection: 'row',
  },
  slogan : {
    width: '80%',
    height : 40,
    marginTop: '1%',
    fontSize : 15,
    color : 'red',
    textAlign : 'left',
    paddingLeft : '5%',
    fontWeight : 'bold',
    fontFamily : 'roboto'
  },
  chooseColor : {
    width: '80%',
    height : 40,
    justifyContent  : 'center',
    textAlign : 'center',
    borderWidth : 1,
    borderRadius : 10,
    borderColor : 'yellow',
    shadowColor : 'black',
    shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5}
  },
  chooseColorIcon : {
    width : 15,
    height : 15,
    position : 'absolute',
    right : '10%',
  },
  buy : {
    width: '80%',
    height : 40,
    backgroundColor : '#CA1536',
    top : '10%',
    textAlign : 'center',
    justifyContent : 'center',
    color : 'white',
    borderRadius : 10,
      shadowColor : 'black',
      shadowRadius : 10,shadowOpacity : 0.5,shadowOffset : {width : 5,height : 5}
  }
});
