import React from 'react';

export const MinaFatCornerRightUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M4.077 21q4.216-3.303 4.785-5.866.569-2.564.172-4.88H4L12.214 3 20 10.253h-4.784Q15.18 14.54 12 17.54T4.077 21"})
);

export default MinaFatCornerRightUp;
