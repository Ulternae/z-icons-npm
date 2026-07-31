import React from 'react';

export const NeoSignalBarsGoodSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M392 140c-30.9 0-56 25.1-56 56v280c0 15.5 12.5 28 28 28h28c30.9 0 56-25.1 56-56V196c0-30.9-25.1-56-56-56M168 280c0-30.9 25.1-56 56-56h28c15.5 0 28 12.5 28 28v224c0 15.5-12.5 28-28 28h-56c-15.5 0-28-12.5-28-28zM0 364c0-30.9 25.1-56 56-56h28c15.5 0 28 12.5 28 28v140c0 15.5-12.5 28-28 28H56c-30.9 0-56-25.1-56-56z"})
);

export default NeoSignalBarsGoodSolid;
