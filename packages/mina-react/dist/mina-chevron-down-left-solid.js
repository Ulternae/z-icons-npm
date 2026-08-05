import React from 'react';

export function MinaChevronDownLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16.364 16.871a.75.75 0 0 0 .75-.75L7.879 6.886a.75.75 0 0 0-.75.75v8.485c0 .415.335.75.75.75z"})
  );
}

export default MinaChevronDownLeftSolid;
