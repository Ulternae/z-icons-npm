import React from 'react';

export function MinaFatCornerDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 4.077q-3.303 4.216-5.866 4.785-2.564.569-4.88.172V4L3 12.214 10.253 20v-4.784Q14.54 15.18 17.54 12T21 4.077"})
  );
}

export default MinaFatCornerDownLeft;
