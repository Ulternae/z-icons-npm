import React from 'react';

export const LanSignPostSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224.2 32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h129c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5h-129v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-224h-144c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h144v-32z"})
);

export default LanSignPostSolid;
