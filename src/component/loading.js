import { memo } from 'react';
import { ActivityIndicator } from 'react-native';

export default memo(props => {
  const { isLoading, style, size, color } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <ActivityIndicator
      color={color || '#8C429E'}
      size={size || 'large'}
      style={[
        {
          marginTop: 8,
          zIndex: 999,
        },
        style,
      ]}
    />
  );
});
