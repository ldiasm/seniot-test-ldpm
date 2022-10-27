import { View, Text, Dimensions, ImageBackground, Image } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export const IntimacyView = styled(View)`
  flex: 1;
  height: 100%;
  width: 100%;
  align-self: center;
  flex-direction: column;
`;

export const IntimacyHeader = styled(View)`
  height: 48px;
  justify-content: center;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const IntimacyTitle = styled(Text)`
  color: #FFF;
  font-size: 16px;
  line-height: 24px
  font-weight: 500;
  text-align: center;
`;

export const IntimacyTools = styled(View)`
  padding-top: 8px;
  flex-direction: row;
  justify-content: center;
`;

export const IntimacyOptions = styled(View)`
  height: 48px;
  padding-top: 8px;
  flex-direction: row;
`;

export const IntimacyFilter = styled(View)`
  height: 24px;
  padding-horizontal: 16px;
  flex-direction: row;
  flex: 8;
`;

export const IntimacyFilterIcon = styled(ImageBackground)`
  height: 24px;
  width: 24px;
`;

export const IntimacyFilterPlaceholder = styled(Text)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 21px
  font-weight: 500;
  text-align: center;
  font-style: normal;
  margin-left: 8px;
`;

export const IntimacyCardsIcon = styled(ImageBackground)`
  height: 24px;
  width: 24px;
  flex 1;
`;

export const IntimacyBookmarkIcon = styled(ImageBackground)`
  height: 24px;
  width: 24px;
  flex: 1;
`;

export const IntimacyMasterCardView = styled(View)`
  flex: 1;
  height: 500px;
  width: 100%;
  align-self: center;
  justify-content: center;
`;

export const IntimacyMasterCardBackground = styled(ImageBackground)`
  height: 100%;
  width: 100%;
`;

export const IntimacyMasterCardTitle = styled(Text)`
  font-size: 44px;
  font-weight: 600;
  line-height: 66px;
  text-align: center;
  color: #fff;
  margin-top: 64px;
`;

export const IntimacyMasterCardSubtitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: #fff;
`;

export const IntimacyMasterCardImage = styled(ImageBackground)`
  height: 171px;
  width: 268px;
  margin-horizontal: 40px;
  margin-vertical: 32px;
  flex-direction: column;
  align-self: center;
  margin-top: 80px;
`;

export const IntimacyFooter = styled(View)`
  height: 48px;
  justify-content: flex-end;
  align-self: center;
  margin-bottom: 54px;
`;

export const IntimacyFooterText = styled(Text)`
  color: rgba(255, 255, 255, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const IntimacyCardsView = styled(View)`
  flex: 1;
  height: 500px;
  width: 295px;
  padding-top: 24px;
  padding-bottom: 32px;
  padding-horizontal: 16px;
  justify-content: flex-start;
  align-self: center;
`;

export const IntimacyCardDetailHeader = styled(Text)`
  flex-direction: row;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  padding-horizontal: 4px;
  padding-top: 24px;
  color: #fff;
`;

export const IntimacyCardDetails = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: 'rgba(255, 255, 255,0.6)';
  padding-horizontal: 4px;
  padding-top: 24px;
  padding-bottom: 32px;
`;

export const IntimacyCardDetailsTable = styled(View)`
  flex-direction: column;
  padding-bottom: 32px;
`;

export const IntimacyCardDetailsRows = styled(View)`
  flex-direction: column;
  height: 32px;
  width: 100%;
`;

export const IntimacyCardDetailsRowIcon = styled(Image)``;

export const IntimacyCardDetailsRowText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #fff;
`;

export const IntimacyCardDetailsRowText2 = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #fff;
`;
