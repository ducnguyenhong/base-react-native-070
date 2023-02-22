import { memo, useMemo } from 'react';
import { Text } from 'react-native';

const TextComponent = props => {
  const { children, style, ...rest } = props;

  const primaryStyle = useMemo(() => {
    if (Array.isArray(style) && !!style.length) {
      return style.reduce((prev, curr) => ({ ...prev, ...curr }));
    }
    return style;
  }, [style]);

  const defaultStyle = useMemo(
    () => ({
      fontFamily: 'Averta-Regular',
      fontSize: 14,
      color: '#292D32',
    }),
    [],
  );

  return (
    <Text
      style={primaryStyle ? [defaultStyle, { ...primaryStyle }] : defaultStyle}
      {...rest}>
      {children}
    </Text>
  );
};

export default memo(TextComponent);
