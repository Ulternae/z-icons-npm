import React from 'react';

export function CorePenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M389.5 0C457.2 0 512 54.8 512 122.5c0 32.5-12.9 63.7-35.9 86.6L173.2 512H0V338.7L302.9 35.9C325.8 12.9 357 0 389.5 0"})
  );
}

export default CorePenSolid;
