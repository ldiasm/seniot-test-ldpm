import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import {
  IntimacyHeader,
  IntimacyTitle,
  IntimacyView,
} from '../../screens/Intimacy/Intimacy.styles';
import { cardsData } from '../../utils/CardsData';

export const CardDetail = () => {
  const cardsArray = cardsData;
  return (
    <Swiper showsButtons>
      {cardsArray.map((item, key) => {
        return (
          <View key={key}>
            <Text style={styles.text}>{item.cardNumber}</Text>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        );
      })}
    </Swiper>
    // <Swiper style={styles.wrapper} showsButtons={true}>
    //   <View style={styles.slide1}>
    //     <Text style={styles.text}>Hello Swiper</Text>
    //   </View>
    //   <View style={styles.slide2}>
    //     <Text style={styles.text}>Beautiful</Text>
    //   </View>
    //   <View style={styles.slide3}>
    //     <Text style={styles.text}>And simple</Text>
    //   </View>
    // </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
