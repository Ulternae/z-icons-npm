import React from 'react';

export function MinaHeartCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M10.291 9.5a1.78 1.78 0 0 0-1.781 1.781c0 1.969 3.375 4.219 3.375 4.219s3.375-2.25 3.375-4.219c0-1.219-.797-1.781-1.781-1.781-.698 0-1.302.4-1.594.985a1.78 1.78 0 0 0-1.594-.985"})
  );
}

export default MinaHeartCircle;
