import React from 'react';

export const LanTilde = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M106.5 160C65.4 160 32 193.4 32 234.5V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V234.5C0 175.7 47.7 128 106.5 128c28.2 0 55.3 11.2 75.3 31.2l171 171c14 14 32.9 21.8 52.7 21.8 41.1 0 74.5-33.4 74.5-74.5V176c0-8.8 7.2-16 16-16s16 7.2 16 16v101.5c0 58.8-47.7 106.5-106.5 106.5-28.2 0-55.3-11.2-75.3-31.2l-171-171c-14-14-32.9-21.8-52.7-21.8"})
);

export default LanTilde;
