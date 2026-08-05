import React from 'react';

export function LanHoneyPotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32C25.1 125.2 0 171.7 0 224c0 138.8 79.6 217.9 113.3 245.1 9.3 7.5 21.1 10.9 33.1 10.9h155.3c12 0 23.7-3.3 33.1-10.9 33.6-27.2 113.3-106.3 113.3-245.1 0-52.3-25.1-98.8-64-128 17.7 0 32-14.3 32-32s-14.3-32-32-32h-208v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V32zM64 224h320c0 53.7-14.7 96.1-32.9 128H96.9C78.7 320.1 64 277.7 64 224"})
  );
}

export default LanHoneyPotSolid;
