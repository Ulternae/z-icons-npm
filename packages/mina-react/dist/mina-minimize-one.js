import React from 'react';

export function MinaMinimizeOne({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M20 10h-6V4M4 14h6v6M20 4l-6 6m-4 4-6 6"})
  );
}

export default MinaMinimizeOne;
