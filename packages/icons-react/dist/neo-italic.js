import React from 'react';

export const NeoItalic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56.4 23.4c-2.5 15.3 7.8 29.7 23 32.2 46.6 7.7 94 12.1 141.2 13.8l-49.5 421c-49.4 1.4-98.9 6-147.7 14-15.3 2.5-25.6 17-23 32.2s17 25.6 32.2 23C86.4 550.7 141.5 546 196 546s109.4 4.8 163.2 13.6c15.3 2.5 29.9-7.7 32.4-23s-7.8-29.7-23-32.2c-46.7-7.7-93.9-12.1-141.2-13.8l49.5-421c49.4-1.4 98.9-6 147.7-14 15.3-2.5 25.6-17 23-32.2s-17-25.6-32.2-23C361.6 9.2 306.5 14 252 14S142.4 9.2 88.6.4c-15.3-2.5-29.7 7.8-32.2 23"})
);

export default NeoItalic;
