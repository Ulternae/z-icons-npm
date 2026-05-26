import React from 'react';

export const LanSaltShakerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M59.3 512h266.4c36.1 0 64.2-33.9 57.9-69.1l-59.4-332.6C312.8 46.5 257.3 0 192.5 0S72.2 46.5 60.8 110.3L1.4 442.9C-4.9 478.1 23.2 512 59.3 512m266.4-48H59.3c-6.6 0-11.8-6.2-10.6-12.7L94.9 192H290l46.3 259.3c1.2 6.5-4 12.7-10.6 12.7M192.5 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanSaltShakerRegular;
