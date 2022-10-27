import { useState } from 'react';
import Swiper from 'react-native-swiper';
import {
  IntimacyMasterCardBackground,
  IntimacyMasterCardImage,
  IntimacyMasterCardSubtitle,
  IntimacyMasterCardTitle,
  IntimacyMasterCardView,
} from '../../screens/Intimacy/Intimacy.styles';
import { cardsData } from '../../utils/CardsData';
import { CardDetail } from '../Intimacy/CardDetail';

interface CardControlProps {
  flipCard?: boolean;
  seeMore?: boolean;
}

let masterCard: CardControlProps = {
  flipCard: false,
  seeMore: false,
};

export const Cards = () => {
  const [flipCard, setflipCard] = useState(masterCard.flipCard);
  const cards = cardsData;

  function masterCardDetail() {
    setflipCard((masterCard.flipCard = !masterCard.flipCard));
  }

  return (
    <Swiper loop={false} showsPagination={false}>
      {cards?.map((card) => (
        <IntimacyMasterCardView key={card.id}>
          {!flipCard ? (
            <IntimacyMasterCardBackground
              source={require('../../assets/images/bgMasterCard.png')}
            >
              <IntimacyMasterCardTitle
                onPress={() => masterCardDetail()}
              >{`#${card.cardNumber}`}</IntimacyMasterCardTitle>
              <IntimacyMasterCardSubtitle onPress={() => masterCardDetail()}>
                {`${card.title}`}
              </IntimacyMasterCardSubtitle>
              <IntimacyMasterCardImage
                source={card.image}
              ></IntimacyMasterCardImage>
            </IntimacyMasterCardBackground>
          ) : (
            <IntimacyMasterCardBackground
              source={require('../../assets/images/bgMasterCard.png')}
            >
              <CardDetail card={card} />
            </IntimacyMasterCardBackground>
          )}
        </IntimacyMasterCardView>
      ))}
    </Swiper>
  );
};
