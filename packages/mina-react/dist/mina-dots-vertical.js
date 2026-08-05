import React from 'react';

export function MinaDotsVertical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.25 12h-.5m.5-4h-.5m.5 8h-.5"})
  );
}

export default MinaDotsVertical;
