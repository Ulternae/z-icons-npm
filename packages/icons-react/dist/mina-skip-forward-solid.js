import React from 'react';

export const MinaSkipForwardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M19.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M3.75 5.08c0-1.467 1.697-2.283 2.843-1.366l8.65 6.92a1.75 1.75 0 0 1 0 2.733l-8.65 6.919c-1.146.917-2.843.1-2.843-1.367z"})
);

export default MinaSkipForwardSolid;
