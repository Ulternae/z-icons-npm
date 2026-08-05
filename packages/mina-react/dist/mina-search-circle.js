import React from 'react';

export function MinaSearchCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M13.856 13.85a3.429 3.429 0 1 0-4.855-4.842 3.429 3.429 0 0 0 4.855 4.842m0 0L16 16"})
  );
}

export default MinaSearchCircle;
