import React from 'react';

export const MinaTrees = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15 19v-2h6l-3.5-4.5h3L15 5l-2 2"}), React.createElement("path", {"d":"M10 17h7l-4.5-6.5h3L10 3l-5.5 7.5h3L3 17zm0 0v4"})
);

export default MinaTrees;
