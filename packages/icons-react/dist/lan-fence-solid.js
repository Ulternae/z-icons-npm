import React from 'react';

export const LanFenceSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M67.5 47.6 23 103.2c-4.5 5.7-7 12.7-7 20V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-30.6h48V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-30.6h48V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V123.2c0-7.3-2.5-14.3-7-20l-44.5-55.6c-6.4-8-18.6-8-25 0L375 103.2c-4.5 5.7-7 12.7-7 20v38.1h-48v-38.1c0-7.3-2.5-14.3-7-20l-44.5-55.6c-6.4-8-18.6-8-25 0L199 103.2c-4.5 5.7-7 12.7-7 20v38.1h-48v-38.2c0-7.3-2.5-14.3-7-20L92.5 47.6c-6.4-8-18.6-8-25 0M368 225.4v128h-48v-128zm-176 0v128h-48v-128z"})
);

export default LanFenceSolid;
