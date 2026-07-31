import React from 'react';

export function BruPixelfed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-20.3 311.9h47c44.2 0 80.1-34.9 80.1-78s-35.9-78-80.1-78h-67.8c-25.5 0-46.2 20.1-46.2 45V376z"})
  );
}

export default BruPixelfed;
