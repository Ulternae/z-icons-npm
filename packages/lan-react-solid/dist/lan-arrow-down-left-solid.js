import React from 'react';

export function LanArrowDownLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 416c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l265.4-265.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L64 338.7V192c0-17.7-14.3-32-32-32S0 174.3 0 192z"})
  );
}

export default LanArrowDownLeftSolid;
