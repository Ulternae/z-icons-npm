import React from 'react';

export function CoreBoxSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 0h-16l-9.6 12.8-89.6 119.5C4.5 143.3 0 156.8 0 170.7V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V170.7c0-13.8-4.5-27.3-12.8-38.4L409.6 12.8 400 0zM93 132l51-68h84v68zm191 0V64h84l51 68z"})
  );
}

export default CoreBoxSolid;
