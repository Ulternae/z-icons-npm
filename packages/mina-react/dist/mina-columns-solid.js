import React from 'react';

export function MinaColumnsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.5 2.25A1.75 1.75 0 0 0 12.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 19.25 20V4a1.75 1.75 0 0 0-1.75-1.75zm-8 0A1.75 1.75 0 0 0 4.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 11.25 20V4A1.75 1.75 0 0 0 9.5 2.25z"})
  );
}

export default MinaColumnsSolid;
