import React from 'react';

export function MinaDots({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"})
  );
}

export default MinaDots;
