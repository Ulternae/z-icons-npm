import React from 'react';

export function BruCloudsmith({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M512 227.6v56.9L284.4 512h-56.8L0 284.4v-56.8L227.6 0h56.9zm-256 162a133.6 133.6 0 1 0 0-267.1 133.6 133.6 0 1 0 0 267.1"})
  );
}

export default BruCloudsmith;
