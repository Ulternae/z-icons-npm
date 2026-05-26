import React from 'react';

export const LanLongArrowAltUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 22.6 70.6 112H104c13.3 0 24 10.7 24 24v360h64V136c0-13.3 10.7-24 24-24h33.4zm-22.6-45.2c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 160.1 288 160.1h-48v336c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-336H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"})
);

export default LanLongArrowAltUpRegular;
