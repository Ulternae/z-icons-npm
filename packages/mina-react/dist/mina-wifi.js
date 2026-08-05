import React from 'react';

export function MinaWifi({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2 9.483c5.603-5.31 14.397-5.31 20 0"}), React.createElement("path", {"d":"M19 12.9c-3.866-3.867-10.134-3.867-14 0m11 3.257a5.657 5.657 0 0 0-8 0m4 3.093v-.5"})
  );
}

export default MinaWifi;
