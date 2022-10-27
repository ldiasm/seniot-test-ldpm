import { View, ScrollView } from 'react-native';
import {
  IntimacyCardDetailHeader,
  IntimacyCardDetails,
  IntimacyCardDetailsRowIcon,
  IntimacyCardDetailsRows,
  IntimacyCardDetailsRowText,
  IntimacyCardDetailsRowText2,
  IntimacyCardDetailsTable,
  IntimacyCardsView,
} from '../../screens/Intimacy/Intimacy.styles';
import { CardDataProps } from '../../utils/CardsData';
import { SeeMore } from './SeeMore';
import { SeparatorLine } from './SeparatorLine';

type CardDetail = {
  card: CardDataProps;
};

export const CardDetail = ({ card }: CardDetail) => {
  return (
    <IntimacyCardsView>
      <IntimacyCardDetailHeader>{`#${card.cardNumber}  |  ${card.title}`}</IntimacyCardDetailHeader>
      <ScrollView>
        <IntimacyCardDetails>
          {`${card.description}`}
          {card.description.length >= 149 ? <SeeMore card={card} /> : <></>}
        </IntimacyCardDetails>
        <IntimacyCardDetailsTable>
          <IntimacyCardDetailsRows>
            <IntimacyCardDetailsRowText>
              <IntimacyCardDetailsRowIcon
                source={require('../../assets/images/fireIcon.png')}
              />
              {`Difficulty: `}
              <IntimacyCardDetailsRowText2>{`${card.difficult}`}</IntimacyCardDetailsRowText2>
            </IntimacyCardDetailsRowText>
          </IntimacyCardDetailsRows>
          <SeparatorLine />
          <IntimacyCardDetailsRows>
            <IntimacyCardDetailsRowText>
              <IntimacyCardDetailsRowIcon
                source={require('../../assets/images/diamondIcon.png')}
              />
              {`Stimulation: `}
              <IntimacyCardDetailsRowText2>{`${card.stimulation}`}</IntimacyCardDetailsRowText2>
            </IntimacyCardDetailsRowText>
          </IntimacyCardDetailsRows>
          <SeparatorLine />
          <IntimacyCardDetailsRows>
            <IntimacyCardDetailsRowText>
              <IntimacyCardDetailsRowIcon
                source={require('../../assets/images/catIcon.png')}
              />
              {`Position Type: `}
              <IntimacyCardDetailsRowText2>{`${card.positionType}`}</IntimacyCardDetailsRowText2>
            </IntimacyCardDetailsRowText>
          </IntimacyCardDetailsRows>
          <SeparatorLine />
          <IntimacyCardDetailsRows>
            <IntimacyCardDetailsRowText>
              <IntimacyCardDetailsRowIcon
                source={require('../../assets/images/bananaIcon.png')}
              />
              {`Penetration: `}
              <IntimacyCardDetailsRowText2>{`${card.penetration}`}</IntimacyCardDetailsRowText2>
            </IntimacyCardDetailsRowText>
          </IntimacyCardDetailsRows>
          <SeparatorLine />
          <IntimacyCardDetailsRows>
            <IntimacyCardDetailsRowText>
              <View style={{ width: 28 }} />
              {`Accessories: `}
              <IntimacyCardDetailsRowText2>{`${card.accessories}`}</IntimacyCardDetailsRowText2>
            </IntimacyCardDetailsRowText>
          </IntimacyCardDetailsRows>
        </IntimacyCardDetailsTable>
      </ScrollView>
    </IntimacyCardsView>
  );
};
