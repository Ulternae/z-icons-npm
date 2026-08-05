import React from 'react';

export function LanArrowCircleUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m11.3-347.3c-6.2-6.2-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l44.7-44.7V336c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l44.7 44.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
  );
}

export default LanArrowCircleUp;
