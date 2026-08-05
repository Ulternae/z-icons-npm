import React from 'react';

export function MinaBatteryEmptySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-17-4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25z"})
  );
}

export default MinaBatteryEmptySolid;
