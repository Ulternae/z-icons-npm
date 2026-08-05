import React from 'react';

export function LanArrowCircleRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m21.7-178.3 72-72c3.1-3.1 3.1-8.2 0-11.3l-72-72c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l58.3 58.3H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h156.7l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
  );
}

export default LanArrowCircleRightThin;
