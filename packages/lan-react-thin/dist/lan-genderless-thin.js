import React from 'react';

export function LanGenderlessThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 368a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
  );
}

export default LanGenderlessThin;
