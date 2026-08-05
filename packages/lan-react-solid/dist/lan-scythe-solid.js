import React from 'react';

export function LanScytheSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M469 0H352C114.8 0 15 151.1 1.6 173.3c-1.1 1.8-1.6 3.8-1.6 6 0 7 5.7 12.7 12.7 12.7h415.2l37.9-176.8zm-26.1 352-26.2 121.3c-3.7 17.3 7.3 34.3 24.6 38s34.3-7.3 38-24.6L574 48.4C579.4 23.5 560.4 0 534.9 0H519l-62.3 288H352c-17.7 0-32 14.3-32 32s14.3 32 32 32z"})
  );
}

export default LanScytheSolid;
