import React from 'react';

export const CoreFontRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 224v32h256v-32c0-70.7-57.3-128-128-128s-128 57.3-128 128","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M128 224v32h256v-32c0-70.7-57.3-128-128-128s-128 57.3-128 128m0 96v96h64v64H0v-64h64V224c0-106 86-192 192-192s192 86 192 192v192h64v64H320v-64h64v-96z"})
);

export default CoreFontRegularDuo;
