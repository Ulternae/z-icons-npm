import React from 'react';

export function MinaRss({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6 11.25A6.75 6.75 0 0 1 12.75 18M6 6a12 12 0 0 1 12 12m-11.5-.146.354-.354"})
  );
}

export default MinaRss;
