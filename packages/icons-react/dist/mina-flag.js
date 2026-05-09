import React from 'react';

export const MinaFlag = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"})
);

export default MinaFlag;
