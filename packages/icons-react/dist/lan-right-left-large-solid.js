import React from 'react';

export const LanRightLeftLargeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 160c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c9.2 9.2 22.9 11.9 34.9 6.9S224 492.9 224 480v-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v18.7L77.3 320l82.7-82.7V256c0 17.7 14.3 32 32 32h160v64c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9S352 19.1 352 32v64h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32v-18.7l82.7 82.7-82.7 82.7V256c0-17.7-14.3-32-32-32H224z"})
);

export default LanRightLeftLargeSolid;
