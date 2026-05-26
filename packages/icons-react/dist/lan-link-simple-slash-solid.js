import React from 'react';

export const LanLinkSimpleSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L485 419.3c54.7-33.9 91-94.4 91-163.3 0-106-86-192-192-192h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c70.7 0 128 57.3 128 128 0 51.4-30.3 95.8-74 116.1L353.8 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-94.2l-96-96H224c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-18.9 0-37.1 2.7-54.4 7.8zm57.6 193.3-45.2-45.2C20.3 157.7 0 204.5 0 256c0 106 86 192 192 192h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-70.7 0-128-57.3-128-128 0-33.9 13.2-64.7 34.6-87.6"})
);

export default LanLinkSimpleSlashSolid;
