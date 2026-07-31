import React from 'react';

export function BruUnsplash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M448 230.17V480H0V230.17h141.13v124.92h165.74V230.17ZM306.87 32H141.13v124.91h165.74Z"})
  );
}

export default BruUnsplash;
