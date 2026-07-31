import React from 'react';

export const LanCupStrawRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232.6-16c-25.4 0-47.6 17.1-54.1 41.6L159.7 96H32c-13.3 0-24 10.7-24 24s10.7 24 24 24l28.2 324.2C62.3 493 83.1 512 108 512h168c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24H209.4l15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9H264c13.3 0 24-10.7 24-24s-10.7-24-24-24zM80.2 144h223.6L276 464H108z"})
);

export default LanCupStrawRegular;
