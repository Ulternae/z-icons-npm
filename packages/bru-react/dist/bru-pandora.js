import React from 'react';

export function BruPandora({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"d":"M201.3 32H0v448h120.2c11.2 0 20.3-9.1 20.3-20.3v-86.1h30.1c147.1 0 207.3-82.9 207.3-179.9C377.9 74 287 31.9 201.4 31.9z"})
  );
}

export default BruPandora;
