import React from 'react';

export const LanUserUnlockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240m-29.7 56C95.8 304 16 383.8 16 482.3c0 16.4 13.3 29.7 29.7 29.7h259.6c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-28.5 12.4-54 32-71.5v-4.3c-24.6-12.8-52.6-20.1-82.3-20.1zm301.7 0h48c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.7c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96v-48c0-17.7 14.3-32 32-32s32 14.3 32 32"})
);

export default LanUserUnlockSolid;
