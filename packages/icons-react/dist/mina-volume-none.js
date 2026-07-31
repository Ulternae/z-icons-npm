import React from 'react';

export const MinaVolumeNone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M13 3v18c-3.5 0-6.1-4.58-6.1-4.58s-3.9.586-3.9-1V8.505c0-1.586 3.9-1 3.9-1S9.5 3 13 3"})
);

export default MinaVolumeNone;
