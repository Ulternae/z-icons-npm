import React from 'react';

export const LanArrowDownToArcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496C123.5 496 16 388.5 16 256c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 141.4 114.6 256 256 256s256-114.6 256-256c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 132.5-107.5 240-240 240M130.3 229.7l120 120c3.1 3.1 8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 324.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v316.7L141.7 218.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
);

export default LanArrowDownToArcThin;
