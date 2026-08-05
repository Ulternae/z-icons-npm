import React from 'react';

export function LanArrowSquareLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm39 207 80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-39 39H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H177.9l39 39c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9z"})
  );
}

export default LanArrowSquareLeftSolid;
