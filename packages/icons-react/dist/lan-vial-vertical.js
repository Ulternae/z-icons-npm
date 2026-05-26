import React from 'react';

export const LanVialVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 16c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v368c0 61.9-50.1 112-112 112S48 461.9 48 400V32H32c-8.8 0-16-7.2-16-16m64 16v160h160V32zm0 192v176c0 44.2 35.8 80 80 80s80-35.8 80-80V224z"})
);

export default LanVialVertical;
