import React from 'react';

export function MinaSearchDotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.25 11.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"}), React.createElement("path", {"d":"M3.25 11.5a8.25 8.25 0 0 0 13.515 6.352l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 1 0 3.25 11.5m8.25-2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"})
  );
}

export default MinaSearchDotSolid;
