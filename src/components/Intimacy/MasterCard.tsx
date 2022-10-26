import { useEffect } from 'react';
import {
  IntimacyMasterCardBackground,
  IntimacyMasterCardImage,
  IntimacyMasterCardSubtitle,
  IntimacyMasterCardTitle,
  IntimacyMasterCardView,
} from '../../screens/Intimacy/Intimacy.styles';

export const MasterCard = () => {
  useEffect(() => {
    
  });

  function masterCardDetail() {
    return console.warn('Me tocou :D');
  }

  return (
    <IntimacyMasterCardView onTouchEnd={() => masterCardDetail()}>
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
    </IntimacyMasterCardView>
  );
};
