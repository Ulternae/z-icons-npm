import React from 'react';

export function MinaBrandFigma({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m0 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0"}), React.createElement("path", {"d":"M12 12a3.001 3.001 0 0 1 5.121-2.121A3.001 3.001 0 1 1 12.001 12"}), React.createElement("path", {"d":"M12 3h3a3 3 0 0 1 0 6h-3zM6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"})
  );
}

export default MinaBrandFigma;
