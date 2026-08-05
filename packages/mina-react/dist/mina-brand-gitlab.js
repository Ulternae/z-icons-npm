import React from 'react';

export function MinaBrandGitlab({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11.981 21 21 13.708 18.498 3l-3.015 6.497H8.997L5.507 3 3 13.708z"})
  );
}

export default MinaBrandGitlab;
