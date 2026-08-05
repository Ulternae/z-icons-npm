import React from 'react';

export function LanBoomboxSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120 48h336c22.1 0 40 17.9 40 40v72h-80c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32H80V88c0-22.1 17.9-40 40-40m424 120.6V88c0-48.6-39.4-88-88-88H120C71.4 0 32 39.4 32 88v80.6c-19.1 11-32 31.7-32 55.4v192c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V224c0-23.7-12.9-44.4-32-55.4M208 320a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-144 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m352 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
  );
}

export default LanBoomboxSolid;
