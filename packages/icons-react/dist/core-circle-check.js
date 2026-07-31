import React from 'react';

export const CoreCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m119.6 144-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0L136.4 272l39.6-39.6 48 48 92.2-92.2 19.8-19.8z"})
);

export default CoreCircleCheck;
