import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import { TextInput } from 'react-native';

const TextInputComponent = forwardRef((props, ref) => {
  const { placeholderTextColor, children, style, ...rest } = props;
  const inputRef = useRef();

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

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return (
    <TextInput
      style={primaryStyle ? [defaultStyle, { ...primaryStyle }] : defaultStyle}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : '#828282'
      }
      ref={inputRef}
      {...rest}
    />
  );
});

export default memo(TextInputComponent);
