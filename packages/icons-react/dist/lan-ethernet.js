import React from 'react';

export const LanEthernet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm224 0H160v48c0 8.8-7.2 16-16 16H96v48c0 8.8-7.2 16-16 16H32v192h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64V224h-48c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16z"})
);

export default LanEthernet;
