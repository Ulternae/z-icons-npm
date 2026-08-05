import React from 'react';

export function MinaCircleHalf({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18V3"})
  );
}

export default MinaCircleHalf;
