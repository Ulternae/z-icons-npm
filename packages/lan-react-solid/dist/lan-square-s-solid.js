import React from 'react';

export function LanSquareSSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm138.5 112H272c13.3 0 24 10.7 24 24s-10.7 24-24 24h-69.5c-10.2 0-18.5 8.3-18.5 18.5 0 9.3 6.9 17.2 16.2 18.3l53.6 6.7c33.3 4.2 58.2 32.4 58.2 66 0 36.7-29.8 66.5-66.5 66.5H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h77.5c10.2 0 18.5-8.3 18.5-18.5 0-9.3-6.9-17.2-16.2-18.3l-53.6-6.7c-33.3-4.2-58.2-32.4-58.2-66 0-36.7 29.8-66.5 66.5-66.5"})
  );
}

export default LanSquareSSolid;
