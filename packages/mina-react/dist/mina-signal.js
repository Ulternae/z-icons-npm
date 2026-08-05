import React from 'react';

export function MinaSignal({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M20.5 10v4m-4-8v12M12 3v18M7.5 6v12m-4-8v4"})
  );
}

export default MinaSignal;
