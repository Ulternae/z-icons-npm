import React from 'react';

export const LanSpinnerScaleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 116a52 52 0 1 1 0-104 52 52 0 1 1 0 104m0 300c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m192-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M0 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m399.4-96.2a56 56 0 1 1-79.2-79.2 56 56 0 1 1 79.2 79.2M65.6 414.4a32 32 0 1 1 45.3-45.3 32 32 0 1 1-45.3 45.3m271.5 0a32 32 0 1 1 45.3-45.3 32 32 0 1 1-45.3 45.3M54.3 86.3a48 48 0 1 1 67.9 67.9 48 48 0 1 1-67.9-67.9"})
);

export default LanSpinnerScaleSolid;
