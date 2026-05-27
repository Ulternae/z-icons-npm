import React from 'react';

export const CoreCircleArrowLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m35.8 99.8L227.6 228H384v56H227.6l64.2 64.2-39.6 39.6-112-112c-10.9-10.9-10.9-28.7 0-39.6l112-112z"})
);

export default CoreCircleArrowLeft;
