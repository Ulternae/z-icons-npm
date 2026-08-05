import React from 'react';

export function LanArrowCircleLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-93.7-261.7c-3.1 3.1-3.1 8.2 0 11.3l72 72c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 264H344c4.4 0 8-3.6 8-8s-3.6-8-8-8H187.3l58.3-58.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-72 72z"})
  );
}

export default LanArrowCircleLeftThin;
