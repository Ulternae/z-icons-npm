import React from 'react';

export function MinaInfoCircleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"})
  );
}

export default MinaInfoCircleSolid;
