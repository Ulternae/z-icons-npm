import React from 'react';

export const CoreHand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 64c-8.8 0-16 7.2-16 16v208h-64V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v208H96V112c0-44.2 35.8-80 80-80 10 0 19.6 1.8 28.4 5.2C218.6 14.8 243.6 0 272 0c39.4 0 72.1 28.4 78.8 65.9 5.6-1.2 11.3-1.9 17.2-1.9 44.2 0 80 35.8 80 80v208c0 88.4-71.6 160-160 160h-96C86 512 0 426 0 320v-96h64v96c0 70.7 57.3 128 128 128h96c53 0 96-43 96-96V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v144h-64V80c0-8.8-7.2-16-16-16"})
);

export default CoreHand;
