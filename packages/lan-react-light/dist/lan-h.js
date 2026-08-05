import React from 'react';

export function LanH({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 256v208c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H32V48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.2 16 16 16s16-7.2 16-16V256z"})
  );
}

export default LanH;
