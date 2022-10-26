import { ImageBackground, Text, View } from 'react-native';
import {
  IntimacyHeader,
  IntimacyTitle,
  IntimacyView,
} from '../../screens/Intimacy/Intimacy.styles';

export const SwiperInstructions = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/swipeInstructions.png')}
      />
    </View>
  );
};
