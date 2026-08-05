import React from 'react';

export function MinaArrowDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 4.5v15m0 0-6-5.625m6 5.625 6-5.625"})
  );
}

export default MinaArrowDown;
