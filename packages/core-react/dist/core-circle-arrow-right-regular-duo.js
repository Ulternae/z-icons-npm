import React from 'react';

export function CoreCircleArrowRightRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m64-28h156.4l-64.2-64.2 39.6-39.6 112 112c10.9 10.9 10.9 28.7 0 39.6l-112 112-39.6-39.6 64.2-64.2H128z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m115.8 172.2c10.9 10.9 10.9 28.7 0 39.6l-112 112-39.6-39.6 64.2-64.2H128v-56h156.4l-64.2-64.2 39.6-39.6z"})
  );
}

export default CoreCircleArrowRightRegularDuo;
