import React from 'react';

export function LanBanThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M420 431.3 80.7 92C40.5 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240 63.4 0 121.1-24.6 164-64.7m11.3-11.3c40.2-42.9 64.7-100.6 64.7-164 0-132.5-107.5-240-240-240-63.4 0-121.1 24.6-164 64.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
  );
}

export default LanBanThin;
