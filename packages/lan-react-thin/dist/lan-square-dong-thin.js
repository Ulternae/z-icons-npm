import React from 'react';

export function LanSquareDongThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm272 8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v200c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c-14.6 19.4-37.8 32-64 32-44.2 0-80-35.8-80-80s35.8-80 80-80c26.2 0 49.4 12.6 64 32v-80h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72zm-64 104a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-96 200c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H120c-4.4 0-8-3.6-8-8"})
  );
}

export default LanSquareDongThin;
