import React from 'react';

export const CoreSlidersRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 0c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H0V96h96V32c0-17.7 14.3-32 32-32m160 256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H0v-64h256v-64c0-17.7 14.3-32 32-32m-64-96V96h288v64zm288 256H384v-64h128z"})
);

export default CoreSlidersRegularDuo;
