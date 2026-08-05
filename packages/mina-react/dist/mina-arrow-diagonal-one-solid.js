import React from 'react';

export function MinaArrowDiagonalOneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.399 13.237a.75.75 0 0 0 1.06 0l4.929-4.928 2.32 2.32a.75.75 0 0 0 .75-.75v-4.95a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75l2.319 2.32-4.928 4.928a.75.75 0 0 0 0 1.06m15.202-2.474a.75.75 0 0 1 0 1.06l-4.928 4.929 2.32 2.32a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75v-4.95a.75.75 0 0 1 .75-.75l2.32 2.319 4.928-4.928a.75.75 0 0 1 1.06 0"})
  );
}

export default MinaArrowDiagonalOneSolid;
