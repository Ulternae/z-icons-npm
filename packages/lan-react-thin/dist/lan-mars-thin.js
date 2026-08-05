import React from 'react';

export function LanMarsThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 40c0 4.4 3.6 8 8 8h124.7l-126 126c-31.3-28.6-72.9-46-118.7-46C78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-45.7-17.4-87.4-46-118.7l126-126V184c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8M16 304a160 160 0 1 1 320 0 160 160 0 1 1-320 0"})
  );
}

export default LanMarsThin;
