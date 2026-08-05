import React from 'react';

export function LanWeightHangingRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c48.6 0 88 39.4 88 88 0 14.4-3.5 28-9.7 40h34.1l5.3.2c26.1 2.1 48.4 20 56.1 45.4l80 266.5c1.6 5.2 2.3 10.6 2.3 16l-.3 5.7c-2.7 26.3-23.6 47.1-49.8 49.8l-5.7.3H55.9l-5.7-.3C23.8 509 3 488.2.3 461.9l-.3-5.7c0-4.1.4-8.1 1.3-12.1l1-3.9 80-266.5c7.6-25.4 30-43.3 56.1-45.4l5.2-.2h34.1c-6.1-12-9.7-25.6-9.7-40 0-48.6 39.4-88 88-88zM143.6 176c-6.2 0-11.7 3.5-14.4 9l-1 2.4-79.9 266.5c-.2.7-.3 1.5-.3 2.3 0 4.3 3.5 7.8 7.8 7.8h400.4c4.3 0 7.8-3.5 7.8-7.8l-.3-2.3-79.9-266.5c-2-6.8-8.3-11.4-15.3-11.4H143.8zM256 48a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
  );
}

export default LanWeightHangingRegular;
