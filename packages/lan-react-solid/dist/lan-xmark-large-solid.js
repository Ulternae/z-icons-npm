import React from 'react';

export function LanXmarkLargeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 210.7 54.6 9.4C42.1-3.1 21.9-3.1 9.4 9.4s-12.5 32.8 0 45.3L210.7 256 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3l201.4 201.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256z"})
  );
}

export default LanXmarkLargeSolid;
