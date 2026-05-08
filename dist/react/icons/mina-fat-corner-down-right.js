import React from 'react';

export const MinaFatCornerDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 4.077q3.303 4.216 5.866 4.785 2.564.569 4.88.172V4L21 12.214 13.747 20v-4.784Q9.46 15.18 6.46 12T3 4.077"})
);

export default MinaFatCornerDownRight;
