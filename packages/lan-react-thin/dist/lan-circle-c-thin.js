import React from 'react';

export function LanCircleCThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-62.2-193.8c-34.4-34.4-34.4-90.1 0-124.4s90.1-34.4 124.4 0c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3c-40.6-40.6-106.5-40.6-147.1 0s-40.6 106.5 0 147.1 106.5 40.6 147.1 0c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0c-34.4 34.4-90.1 34.4-124.4 0z"})
  );
}

export default LanCircleCThin;
