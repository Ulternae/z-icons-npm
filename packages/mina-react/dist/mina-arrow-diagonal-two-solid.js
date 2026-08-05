import React from 'react';

export function MinaArrowDiagonalTwoSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M13.238 19.601a.75.75 0 0 0 0-1.06l-4.929-4.929 2.32-2.32a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75v4.95c0 .415.336.75.75.75l2.32-2.319 4.928 4.928a.75.75 0 0 0 1.06 0M10.763 4.399a.75.75 0 0 1 1.06 0l4.929 4.928 2.32-2.32a.75.75 0 0 1 .75.75v4.95a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75l2.32-2.32-4.93-4.928a.75.75 0 0 1 0-1.06"})
  );
}

export default MinaArrowDiagonalTwoSolid;
