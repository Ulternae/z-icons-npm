import React from 'react';

export function MinaTypeItalic({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19 3H9m6 18H5m9.5-18L10 21"})
  );
}

export default MinaTypeItalic;
