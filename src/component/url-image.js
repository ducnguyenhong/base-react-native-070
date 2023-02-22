import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

export default memo(props => {
  const { url, style, placeHolder, resizeMode } = props;
  const [showDefault, setShowDefault] = useState(false);

  useEffect(() => {
    if (url) {
      setShowDefault(false);
    }
  }, [url]);

  const onError = useCallback(() => {
    setShowDefault(true);
  }, []);

  if (!url || showDefault) {
    return <Image style={style} source={placeHolder} resizeMode={resizeMode} />;
  }

  return (
    <FastImage
      style={style}
      source={{
        uri: url,
      }}
      onError={onError}
      resizeMode={resizeMode}
    />
  );
});
