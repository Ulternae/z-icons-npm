import React from 'react';

export function LanScannerImageSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M79.1 35.8c-15.6-8.3-35-2.4-43.3 13.2S33.4 84 49 92.3L416 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-76.8c0-23.6-13-45.4-33.9-56.5zM64 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanScannerImageSolid;
