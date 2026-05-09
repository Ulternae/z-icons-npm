import React from 'react';

export const MinaSearchHome = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M10.25 14a1 1 0 0 1-1-1v-2.36L11.5 9l2.25 1.64V13a1 1 0 0 1-1 1z"}), React.createElement('path', {"d":"M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08"})
);

export default MinaSearchHome;
