import { Text, View } from 'react-native';
import {
  IntimacyFooter,
  IntimacyFooterText,
} from '../../screens/Intimacy/Intimacy.styles';

export const Footer = () => {
  return (
    <IntimacyFooter>
      <IntimacyFooterText>{`Tap for more details`}</IntimacyFooterText>
    </IntimacyFooter>
  );
};
