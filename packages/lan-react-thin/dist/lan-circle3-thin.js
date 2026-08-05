import React from 'react';

export function LanCircle3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m20-264h-60c-4.4 0-8 3.6-8 8s3.6 8 8 8h60c19.9 0 36 16.1 36 36s-16.1 36-36 36h-76c-4.4 0-8 3.6-8 8s3.6 8 8 8h76c28.7 0 52-23.3 52-52 0-18.5-9.7-34.8-24.3-44 14.6-9.2 24.3-25.5 24.3-44 0-28.7-23.3-52-52-52h-76c-4.4 0-8 3.6-8 8s3.6 8 8 8h76c19.9 0 36 16.1 36 36s-16.1 36-36 36"})
  );
}

export default LanCircle3Thin;
