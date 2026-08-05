import React from 'react';

export function MinaBrandFramer({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 15.6V21l-6.5-5.4zM5.5 3l13 12.6h-13V9.3h13V3z"})
  );
}

export default MinaBrandFramer;
