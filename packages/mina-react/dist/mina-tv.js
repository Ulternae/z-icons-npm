import React from 'react';

export function MinaTv({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m12 7 6.632-4m-7.106 4L5.368 3M3 9.154C3 7.964 3.895 7 5 7h14c1.105 0 2 .964 2 2.154v9.692c0 1.19-.895 2.154-2 2.154H5c-1.105 0-2-.964-2-2.154z"})
  );
}

export default MinaTv;
