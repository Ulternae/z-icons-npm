import React from 'react';

export function LanCircleN({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-51.5-346c-4.2-5.3-11.4-7.4-17.8-5.1S176 169.2 176 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V221.6L307.5 346c4.2 5.3 11.4 7.4 17.8 5.1S336 342.8 336 336V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v114.4z"})
  );
}

export default LanCircleN;
