import React from 'react';

export const LanH5Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 88c0-13.3-10.7-24-24-24S32 74.7 32 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V280h128v144c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v144H80zm264-24c-13.3 0-24 10.7-24 24v160c0 13.3 10.7 24 24 24h96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h96c61.9 0 112-50.1 112-112s-50.1-112-112-112h-72V112h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanH5Regular;
