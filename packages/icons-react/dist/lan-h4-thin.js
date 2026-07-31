import React from 'react';

export const LanH4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V264h192v176c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v176H16zm288 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 44.2 35.8 80 80 80h128v168c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v184H368c-35.3 0-64-28.7-64-64z"})
);

export default LanH4Thin;
