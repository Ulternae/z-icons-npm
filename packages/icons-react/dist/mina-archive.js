import React from 'react';

export const MinaArchive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10.5 11.5h3M20 8v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8m17 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z"})
);

export default MinaArchive;
