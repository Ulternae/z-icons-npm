import React from 'react';

export const LanWifi2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M44.3 309.3C79.5 266.9 132.6 240 192 240s112.5 26.9 147.7 69.3c5.6 6.8 15.7 7.7 22.5 2.1s7.7-15.7 2.1-22.5C323.2 239.5 261.3 208 192 208S60.8 239.5 19.7 288.9c-5.7 6.8-4.7 16.9 2.1 22.5s16.9 4.7 22.5-2.1M216 424c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24m32 0c0-30.9-25.1-56-56-56s-56 25.1-56 56 25.1 56 56 56 56-25.1 56-56"})
);

export default LanWifi2;
