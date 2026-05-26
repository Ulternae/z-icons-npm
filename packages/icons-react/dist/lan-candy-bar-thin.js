import React from 'react';

export const LanCandyBarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M111.7 96c-4.2 0-7.7 3.2-8 7.4-3.6 51.5-44.8 92.7-96.3 96.3-4.2.3-7.4 3.8-7.4 8V360c0 30.9 25.1 56 56 56h528c30.9 0 56-25.1 56-56V152c0-30.9-25.1-56-56-56zM16 214.9c53.5-7.1 95.8-49.5 102.9-102.9H168v136H16zm0 49.1h152v136H56c-22.1 0-40-17.9-40-40zm168 136V264h144v136zm160 0V112h240c22.1 0 40 17.9 40 40v208c0 22.1-17.9 40-40 40zm-16-288v136H184V112z"})
);

export default LanCandyBarThin;
