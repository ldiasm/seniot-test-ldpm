import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import { Dimensions, ImageBackground, Pressable, View } from 'react-native';
import { Footer } from '../../components/Intimacy/Footer';
import { Header } from '../../components/Intimacy/Header';
import {
  IntimacyBookmarkIcon,
  IntimacyCardsIcon,
  IntimacyFilter,
  IntimacyFilterIcon,
  IntimacyFilterPlaceholder,
  IntimacyHeader,
  IntimacyMasterCardTitle,
  IntimacyOptions,
  IntimacySwiperInstructionitle,
  IntimacyTools,
  IntimacyView,
} from './Intimacy.styles';
import { MasterCard } from '../../components/Intimacy/MasterCard';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

interface SwiperInstructions {
  show: boolean;
}

let swiperInstructions: SwiperInstructions = {
  show: true,
};

export const Intimacy = () => {
  const [loadInstructions, setLoadInstructions] = useState(
    swiperInstructions.show
  );

  function handleInstructions() {
    setLoadInstructions((swiperInstructions.show = !swiperInstructions.show));
  }

  return (
    <IntimacyView>
      {loadInstructions ? (
        <Pressable
          onPress={() => handleInstructions()}
          style={{
            borderColor: 'yellow',
            alignSelf: 'center',
            position: 'absolute',
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              width: 300,
              height: 500,
              alignSelf: 'center',
              justifyContent: 'center',
              top: 170,
            }}
            source={require('../../assets/images/swipeInstructions.png')}
          />
        </Pressable>
      ) : (
        <>
          <Header />
          <IntimacyTools>
            <Slider
              style={{ height: 50, width: deviceWidth - 32 }}
              step={1}
              thumbTintColor='#8312BE'
              thumbImage={require('../../assets/images/sliderIcon2.png')}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor='#822A4C'
              maximumTrackTintColor='rgba(247,101,103,0.2)'
              value={10}
            />
          </IntimacyTools>
          <IntimacyOptions>
            <IntimacyFilter>
              <IntimacyFilterIcon
                source={require('../../assets/images/filterIcon.png')}
              />
              <IntimacyFilterPlaceholder>{`Filters`}</IntimacyFilterPlaceholder>
            </IntimacyFilter>
            <IntimacyCardsIcon
              source={require('../../assets/images/cardsIcon.png')}
            />
            <IntimacyBookmarkIcon
              source={require('../../assets/images/bookmarkIcon.png')}
            />
          </IntimacyOptions>
          <MasterCard />
          <Footer />
        </>
      )}
    </IntimacyView>
  );
};
