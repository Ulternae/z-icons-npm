import React from 'react';

export const LanCoffinRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48.2 145.8 133.8 48h116.4l85.6 97.8L243.9 464H140.1zm54.2-134.9-91 104C4 123.4-.1 134.2-.1 145.5q0 6.6 1.8 12.9l95.6 330.5c4 13.7 16.5 23.1 30.7 23.1h127.9c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6q1.8-6.3 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0h-131c-9.2 0-18 4-24.1 10.9"})
);

export default LanCoffinRegular;
