import React from 'react';

export const LanArrowUTurnDownLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7.1 367c-9.4 9.4-9.4 24.6 0 33.9l120 120c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79-79h242c103.8 0 188-84.2 188-188S427.8 32 324 32H88l-2.5.1C73.5 33.4 64 43.6 64 56s9.4 22.6 21.5 23.9l2.5.1h236c77.3 0 140 62.7 140 140s-62.7 140-140 140H81.9l79-79 1.7-1.8c7.7-9.4 7.1-23.3-1.7-32.1s-22.7-9.3-32.1-1.7l-1.8 1.7-120 120z"})
);

export default LanArrowUTurnDownLeftRegular;
