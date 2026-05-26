import React from 'react';

export const LanDigitalTachograph = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 48v48h176v-48zm-32 0c0-17.7 14.3-32 32-32h176c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32zm360 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112M96 336h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16m240 0h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanDigitalTachograph;
