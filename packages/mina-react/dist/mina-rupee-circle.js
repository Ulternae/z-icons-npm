import React from 'react';

export function MinaRupeeCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9 7.5h6m-6 2.778h6M13.25 17.5 9 13.056h1.5c3.334 0 3.334-5.556 0-5.556"})
  );
}

export default MinaRupeeCircle;
