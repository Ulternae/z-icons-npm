import React from 'react';

export function LanSquare5Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm272 64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96v64h64c30.9 0 56 25.1 56 56s-25.1 56-56 56h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72c22.1 0 40-17.9 40-40s-17.9-40-40-40h-72c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8z"})
  );
}

export default LanSquare5Thin;
