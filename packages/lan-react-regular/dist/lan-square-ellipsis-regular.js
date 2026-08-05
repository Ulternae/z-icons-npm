import React from 'react';

export function LanSquareEllipsisRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm16 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm128-224a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m160-32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
  );
}

export default LanSquareEllipsisRegular;
