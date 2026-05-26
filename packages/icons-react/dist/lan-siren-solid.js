import React from 'react';

export const LanSirenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M73.4 88.5 48 304h66.1l14-154.2c1.2-13.2 12.9-22.9 26.1-21.7s22.9 12.9 21.7 26.1L162.3 304H400L374.6 88.5C370.9 56.3 343.5 32 311.1 32H136.9c-32.5 0-59.8 24.3-63.6 56.5zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"})
);

export default LanSirenSolid;
