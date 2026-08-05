import React from 'react';

export function LanSquareHalfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32h160v448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m112 400V80H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16z"})
  );
}

export default LanSquareHalfRegular;
