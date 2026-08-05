import React from 'react';

export function MinaRecord({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M6.5 16h11"})
  );
}

export default MinaRecord;
