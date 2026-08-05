import React from 'react';

export function MinaBitcoinCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"})
  );
}

export default MinaBitcoinCircle;
