import React from 'react';

export const Lan4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v248c0 35.3 28.7 64 64 64h240v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v296H64c-26.5 0-48-21.5-48-48z"})
);

export default Lan4Thin;
