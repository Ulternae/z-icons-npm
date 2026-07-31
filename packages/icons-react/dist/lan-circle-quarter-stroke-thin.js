import React from 'react';

export const LanCircleQuarterStrokeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256c0-132.5-107.5-240-240-240v184c0 22.1-17.9 40-40 40H16.5c-.3 5.3-.5 10.6-.5 16 0 132.5 107.5 240 240 240s240-107.5 240-240M240 16.5C125.6 24.1 33.1 111.8 18.1 224H216c13.3 0 24-10.7 24-24zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleQuarterStrokeThin;
