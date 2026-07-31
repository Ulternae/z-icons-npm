import React from 'react';

export const MinaCornerRightUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M13.973 5v10a4 4 0 0 1-4 4H5m8.973-14L8.946 9.78M13.973 5 19 9.78"})
);

export default MinaCornerRightUp;
