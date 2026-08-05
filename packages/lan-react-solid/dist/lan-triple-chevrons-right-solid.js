import React from 'react';

export function LanTripleChevronsRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M9.9 105.4c12.5-12.5 32.8-12.5 45.2 0l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2s-12.4-30.2-2.2-42.8l2.2-2.4L115.2 256 9.9 150.6c-12.5-12.5-12.5-32.8 0-45.2m192 0c12.5-12.5 32.8-12.5 45.2 0l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2s-12.4-30.2-2.2-42.8l2.2-2.4L307.3 256 201.9 150.6c-12.5-12.5-12.5-32.8 0-45.2m192 0c12.5-12.5 32.8-12.5 45.2 0l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2s-12.4-30.2-2.2-42.8l2.2-2.4L499.3 256 393.9 150.6c-12.5-12.5-12.5-32.8 0-45.2"})
  );
}

export default LanTripleChevronsRightSolid;
