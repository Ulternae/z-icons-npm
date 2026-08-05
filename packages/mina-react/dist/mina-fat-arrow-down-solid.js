import React from 'react';

export function MinaFatArrowDownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.716 2.25H9.284c-.714 0-1.232.596-1.232 1.256v8.849H4.483c-1.161 0-1.592 1.387-.884 2.13l.037.036 7.502 6.87a1.216 1.216 0 0 0 1.724 0l7.502-6.87.037-.035c.708-.744.277-2.131-.884-2.131h-3.569v-8.85c0-.659-.518-1.255-1.232-1.255"})
  );
}

export default MinaFatArrowDownSolid;
