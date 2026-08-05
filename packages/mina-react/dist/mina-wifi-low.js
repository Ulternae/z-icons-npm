import React from 'react';

export function MinaWifiLow({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 16.157a5.657 5.657 0 0 0-8 0m4 3.093v-.5"})
  );
}

export default MinaWifiLow;
