import React from 'react';

export function LanDialMaxSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m113.4 174.7c56.7 56.7 61.9 145.4 15.7 208L305.3 270.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l111.8 111.9c-62.6 46.2-151.3 41-208-15.7-62.5-62.5-62.5-163.8 0-226.3s163.8-62.5 226.3 0zM512 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanDialMaxSolid;
