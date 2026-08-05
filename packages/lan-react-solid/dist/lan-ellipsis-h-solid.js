import React from 'react';

export function LanEllipsisHSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m168 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
  );
}

export default LanEllipsisHSolid;
