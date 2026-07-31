import React from 'react';

export const MinaTree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 17h7l-4.5-6.5h3L12 3l-5.5 7.5h3L5 17zm0 0v4"})
);

export default MinaTree;
