import { Text, View } from 'react-native';
import {
  IntimacyHeader,
  IntimacyTitle,
  IntimacyView,
} from '../../screens/Intimacy/Intimacy.styles';

export const Header = () => {
  return (
    <IntimacyHeader>
      <IntimacyTitle>{`Intimacy`}</IntimacyTitle>
    </IntimacyHeader>
  );
};
