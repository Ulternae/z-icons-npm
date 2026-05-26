import React from 'react';

export const LanEthernetThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm32-16c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8H96c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h72V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h72c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-40c-4.4 0-8-3.6-8-8v-40c0-8.8-7.2-16-16-16h-40c-4.4 0-8-3.6-8-8V96c0-8.8-7.2-16-16-16z"})
);

export default LanEthernetThin;
