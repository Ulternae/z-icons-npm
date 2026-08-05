import React from 'react';

export function MinaBatteryCharging({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.5 7H18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5m-7-10H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5M21 11v2m-9.999-6L8.5 12h5.002L11 17"})
  );
}

export default MinaBatteryCharging;
