import React from 'react';

export const MinaTreePine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 17h7l-4.5-4.5h3l-3.75-4.25L12 3l-1.75 5.25L6.5 12.5h3L5 17zm0 0v4"})
);

export default MinaTreePine;
