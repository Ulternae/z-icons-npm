import React from 'react';

export function LanArrowCircleUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m5.7-349.7c-3.1-3.1-8.2-3.1-11.3 0l-72 72c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l58.3-58.3V344c0 4.4 3.6 8 8 8s8-3.6 8-8V187.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-72-72z"})
  );
}

export default LanArrowCircleUpThin;
