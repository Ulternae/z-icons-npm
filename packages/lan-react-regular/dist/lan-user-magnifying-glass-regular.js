import React from 'react';

export function LanUserMagnifyingGlassRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 528.15',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176.5 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-304 352c0-70.7 57.3-128 128-128h80.2c.8-16.8 4-32.9 9.4-48h-89.6c-97.2 0-176 78.8-176 176v8c0 13.3 10.7 24 24 24s24-10.7 24-24zm376-192a72 72 0 1 1 0 144 72 72 0 1 1 0-144m0 192c24.4 0 47.1-7.3 66.1-19.8l60.9 60.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-60.9-60.9c12.6-19 19.9-41.8 19.9-66.3 0-66.3-53.7-120-120-120s-120 53.7-120 120 53.7 120 120 120z"})
  );
}

export default LanUserMagnifyingGlassRegular;
