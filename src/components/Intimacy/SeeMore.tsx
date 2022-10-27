import { useState } from 'react';
import { Text, View } from 'react-native';
import { IntimacyCardDetails } from '../../screens/Intimacy/Intimacy.styles';
import { CardDataProps } from '../../utils/CardsData';

type CardDetail = {
  card: CardDataProps;
};

export const SeeMore = ({ card }: CardDetail) => {
  const [content, setContent] = useState('');
  const [textColor, setTextColor] = useState('#FFF');

  return (
    <Text
      style={{
        color: textColor || 'rgba(255,255,255,0.6)',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
      }}
      onPress={() => {
        setContent(card.extraDescription ? card.extraDescription : '');
        setTextColor('rgba(255,255,255,0.6)');
      }}
    >{`${content ? ` ${content}` : '\nSee more'}`}</Text>
  );
};
