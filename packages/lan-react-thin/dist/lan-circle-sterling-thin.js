import React from 'react';

export function LanCircleSterlingThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-71.8-303.1 10.2 27.6c.4 1.2.8 2.3 1.2 3.5H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h30.7c1.3 16-2.5 32.2-11.4 46.1l-34.1 53.6c-1.6 2.5-1.7 5.6-.3 8.1s4.1 4.2 7 4.2h184c4.4 0 8-3.6 8-8s-3.6-8-8-8H174.5l26.3-41.3c10.5-16.5 15.2-35.7 13.9-54.7h97.2c4.4 0 8-3.6 8-8s-3.6-8-8-8h-99.8c-.8-3-1.7-6-2.8-9l-10.2-27.6c-13.5-36.6 13.6-75.4 52.5-75.4h3.1c19.1 0 37.4 7.6 50.9 21.1l8.6 8.6c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-8.6-8.6C300.4 121.3 278 112 254.7 112h-3.1c-50.1 0-84.9 49.9-67.6 96.9z"})
  );
}

export default LanCircleSterlingThin;
