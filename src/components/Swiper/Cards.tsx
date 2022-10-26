import { useState } from 'react';
import {
  IntimacyMasterCardBackground,
  IntimacyMasterCardImage,
  IntimacyMasterCardSubtitle,
  IntimacyMasterCardTitle,
  IntimacyMasterCardView,
} from '../../screens/Intimacy/Intimacy.styles';
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
  const [seeMore, setSeeMore] = useState(masterCard.flipCard);

  function masterCardDetail() {
    setflipCard((masterCard.flipCard = !masterCard.flipCard));
  }
  function masterCardDetailExtended() {
    setflipCard((masterCard.seeMore = !masterCard.seeMore));
  }
  return (
    <IntimacyMasterCardView onTouchEnd={() => masterCardDetail()}>
      {!flipCard ? (
        <IntimacyMasterCardBackground
          source={require('../../assets/images/bgMasterCard.png')}
        >
          <IntimacyMasterCardTitle>{`#11`}</IntimacyMasterCardTitle>
          <IntimacyMasterCardSubtitle>
            {`Kinky Spider`}
          </IntimacyMasterCardSubtitle>
          <IntimacyMasterCardImage
            source={require('../../assets/images/kinkySpider.png')}
          ></IntimacyMasterCardImage>
        </IntimacyMasterCardBackground>
      ) : (
        <IntimacyMasterCardBackground
          source={require('../../assets/images/bgMasterCard.png')}
        >
          <CardDetail />
        </IntimacyMasterCardBackground>
      )}
    </IntimacyMasterCardView>
  );
};
