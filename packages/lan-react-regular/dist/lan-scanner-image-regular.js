import React from 'react';

export function LanScannerImageRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M66.7 34.5c-11.9-5.9-26.3-1.1-32.2 10.7s-1.1 26.3 10.8 32.3l421 210.5H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-72.4c0-33.3-18.8-63.8-48.6-78.7zM528 352v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16m-408 32a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanScannerImageRegular;
