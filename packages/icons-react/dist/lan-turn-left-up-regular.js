import React from 'react';

export const LanTurnLeftUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m192 54.6 89.4 89.4H248c-13.3 0-24 10.7-24 24v200c0 17.7 14.3 32 32 32h80v64h-64c-61.9 0-112-50.1-112-112V168c0-13.3-10.7-24-24-24h-33.4zm22.6-45.2c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S51 192.1 64 192.1h48v160c0 88.4 71.6 160 160 160h80c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-80v-160h48c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"})
);

export default LanTurnLeftUpRegular;
