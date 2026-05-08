import React from 'react';

export const MinaPercentageDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zm7.147-.441L9.5 9.5m5.004 5.004-.354-.354m-4.65.35 5-5"})
);

export default MinaPercentageDiamond;
