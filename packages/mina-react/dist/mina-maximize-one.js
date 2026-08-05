import React from 'react';

export function MinaMaximizeOne({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14 4h6v6M10 20H4v-6M20 4l-6 6M4 20l6-6"})
  );
}

export default MinaMaximizeOne;
