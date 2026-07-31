import React from 'react';

export const MinaComponents = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8.85 6.15 12 3l3.15 3.15L12 9.3zm5.85 6.3 3.15-3.15L21 12.45l-3.15 3.15zm-5.85 5.4L12 14.7l3.15 3.15L12 21zM3 12l3.15-3.15L9.3 12l-3.15 3.15z"})
);

export default MinaComponents;
