import React from 'react';

export function BruEthereum({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M311.9 260.8 160 353.6 8 260.8 160 0zM160 383.4 8 290.6 160 512l152-221.4z"})
  );
}

export default BruEthereum;
