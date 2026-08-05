import React from 'react';

export function LanCircleArrowUpRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m88 160c4.4 0 8 3.6 8 8v128c0 4.4-3.6 8-8 8s-8-3.6-8-8V187.3L173.7 349.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 176H216c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanCircleArrowUpRightThin;
