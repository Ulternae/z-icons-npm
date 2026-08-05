import React from 'react';

export function LanSquareHalfThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32h160v448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m144 432V48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48z"})
  );
}

export default LanSquareHalfThin;
