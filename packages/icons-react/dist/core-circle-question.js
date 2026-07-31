import React from 'react';

export const CoreCircleQuestion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 344a40 40 0 1 1 0-80 40 40 0 1 1 0 80m0-292c50.8 0 92 41.2 92 92s-41.2 92-92 92h-32v-56h32c19.9 0 36-16.1 36-36s-16.1-36-36-36-36 16.1-36 36h-56c0-50.8 41.2-92 92-92"})
);

export default CoreCircleQuestion;
