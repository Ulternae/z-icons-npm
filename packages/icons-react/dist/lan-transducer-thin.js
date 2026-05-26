import React from 'react';

export const LanTransducerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248-32c4.4 0 8 3.6 8 8v88h16c26.5 0 48 21.5 48 48v288h16c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H48C23.1 544 2.7 525.1.2 500.9L0 496v-48c0-26.5 21.5-48 48-48h16V112c0-26.5 21.5-48 48-48h16v-88c0-4.4 3.6-8 8-8s8 3.6 8 8v88h96v-88c0-4.4 3.6-8 8-8M48 416c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h48V416zm64 112h160V416H112zm176 0h48c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-48zM112 80c-17.7 0-32 14.3-32 32v288h224V112c0-17.7-14.3-32-32-32z"})
);

export default LanTransducerThin;
