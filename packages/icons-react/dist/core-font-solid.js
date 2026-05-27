import React from 'react';

export const CoreFontSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 416v-96h256v96h-64v64h192v-64h-64V224c0-106-86-192-192-192S64 118 64 224v192H0v64h192v-64z"})
);

export default CoreFontSolid;
