import React from 'react';

export const LanCircleThreeQuartersStrokeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M495.5 272H280c-22.1 0-40-17.9-40-40V16.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240 127.2 0 231.2-98.9 239.5-224m.5-16c0-132.5-107.5-240-240-240v216c0 13.3 10.7 24 24 24zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleThreeQuartersStrokeThin;
