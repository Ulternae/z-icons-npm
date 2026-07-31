import React from 'react';

export function CoreFishSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 534.6',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144.1 240c0-132.5 107.5-240 240-240h64c53 0 96 43 96 96v64c0 132.5-107.5 240-240 240h-48v34.7c0 33.2-13.2 65.1-36.7 88.6l-11.3 11.3-11.3-11.3-176-176L9.5 336l11.3-11.3c23.5-23.5 55.4-36.7 88.6-36.7h34.7zm256-56a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
  );
}

export default CoreFishSolid;
