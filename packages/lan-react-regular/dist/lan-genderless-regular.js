import React from 'react';

export function LanGenderlessRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 336a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
  );
}

export default LanGenderlessRegular;
