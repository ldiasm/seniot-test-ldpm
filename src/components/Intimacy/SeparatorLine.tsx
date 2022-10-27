import { View } from 'react-native';

export const SeparatorLine = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        margin: 8,
        width: '100%',
        paddingHorizontal: 16,
      }}
    />
  );
};
