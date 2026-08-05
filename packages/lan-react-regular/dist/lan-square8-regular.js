import React from 'react';

export function LanSquare8Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 116c0-37.6 30.4-68 68-68h24c37.6 0 68 30.4 68 68 0 14.7-4.6 28.2-12.5 39.3 12.7 12.3 20.5 29.6 20.5 48.7 0 37.6-30.4 68-68 68h-40c-37.6 0-68-30.4-68-68 0-19.1 7.9-36.3 20.5-48.7-7.9-11.1-12.5-24.7-12.5-39.3m112 0c0-11-9-20-20-20h-24c-11 0-20 9-20 20s9 20 20 20h24c11 0 20-9 20-20m-52 68c-11 0-20 9-20 20s9 20 20 20h40c11 0 20-9 20-20s-9-20-20-20z"})
  );
}

export default LanSquare8Regular;
