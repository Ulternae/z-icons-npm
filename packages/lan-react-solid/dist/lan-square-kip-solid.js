import React from 'react';

export function LanSquareKipSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm250.5 104.8c8.4 10.2 6.9 25.4-3.3 33.8l-84.7 69.7h77.3c8.8 0 16 7.2 16 16s-7.2 16-16 16h-77.1l84.5 69.2c10.3 8.4 11.8 23.5 3.4 33.8s-23.6 11.7-33.8 3.3L192 305.9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24v-87.8h-15.8c-8.8 0-16-7.2-16-16s7.2-16 16-16H144V152c0-13.3 10.7-24 24-24s24 10.7 24 24v54.5l88.8-73c10.2-8.4 25.4-6.9 33.8 3.3z"})
  );
}

export default LanSquareKipSolid;
