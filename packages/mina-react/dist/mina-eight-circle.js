import React from 'react';

export function MinaEightCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M12 12s2.5.5 2.5 2-1.12 2-2.5 2-2.5-.5-2.5-2 2.5-2 2.5-2m0 0s2.5-.5 2.5-2-1.12-2-2.5-2-2.5.5-2.5 2 2.5 2 2.5 2"})
  );
}

export default MinaEightCircle;
