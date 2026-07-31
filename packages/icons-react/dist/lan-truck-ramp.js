import React from 'react';

export const LanTruckRamp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 96c0-35.3 28.7-64 64-64h192v32H384c-17.7 0-32 14.3-32 32v288h57.6c14.6-28.5 44.2-48 78.4-48 48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88c0-2.7.1-5.4.4-8h-62L20.6 511.3c-8.5 2.5-17.4-2.3-19.9-10.7s2.3-17.4 10.7-19.9L320 388.1zm168 384a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanTruckRamp;
