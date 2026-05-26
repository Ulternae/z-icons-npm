import React from 'react';

export const LanWRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M15.9 33.4c12.5-4.5 26.2 2 30.7 14.5l119.3 331.5L265 49.1C268.1 39 277.4 32 288 32s19.9 7 23 17.1l99.1 330.3L529.4 47.9c4.5-12.5 18.2-18.9 30.7-14.5s18.9 18.2 14.5 30.7l-144 400c-3.5 9.7-12.9 16.1-23.2 15.9s-19.4-7.2-22.4-17.1l-97-323.4-97 323.4c-3 9.9-12 16.8-22.3 17.1s-19.7-6.1-23.2-15.9L1.4 64.1c-4.5-12.5 2-26.2 14.5-30.7"})
);

export default LanWRegular;
