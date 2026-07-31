import React from 'react';

export function BruInstalod({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M153.384 480h233.729l115.441-204.235-298.325 57.446Zm351.342-239.922L387.113 32H155.669L360.23 267.9ZM124.386 48.809 7.274 256l115.962 205.154 102.391-295.593Z"})
  );
}

export default BruInstalod;
