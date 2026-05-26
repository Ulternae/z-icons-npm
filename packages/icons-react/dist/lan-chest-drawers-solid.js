import React from 'react';

export const LanChestDrawersSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 497.7 0 480V320h448zM200 368c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0-96H0v-96h200zm248 0H248v-96h200zM200 128H0V48C0 21.5 21.5 0 48 0h152zM400 0c26.5 0 48 21.5 48 48v80H248V0z"})
);

export default LanChestDrawersSolid;
