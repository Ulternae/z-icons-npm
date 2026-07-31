import React from 'react';

export const MinaListCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.5 16.039 4.688 19.5 3 18.346m4.5-8.077-2.812 3.462L3 12.577M7.5 4.5 4.688 7.962 3 6.808M11 17.5h10M11 12h10M11 6.5h10"})
);

export default MinaListCheck;
