import React from 'react';

export function LanSquareDivideThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-72 88h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H120c-4.4 0-8-3.6-8-8s3.6-8 8-8m104 120a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanSquareDivideThin;
