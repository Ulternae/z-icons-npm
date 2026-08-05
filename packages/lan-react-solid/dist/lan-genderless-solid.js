import React from 'react';

export function LanGenderlessSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 320a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
  );
}

export default LanGenderlessSolid;
