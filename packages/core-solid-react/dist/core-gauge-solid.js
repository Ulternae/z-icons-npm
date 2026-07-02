import React from 'react';

export function CoreGaugeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512M232 96v196.7c-23.4 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.6-49.8-40-59.3V96zM96 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m320 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64M144 112a32 32 0 1 0 0 64 32 32 0 1 0 0-64m224 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
  );
}

export default CoreGaugeSolid;
