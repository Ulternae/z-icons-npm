import React from 'react';

export function MinaTree({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 17h7l-4.5-6.5h3L12 3l-5.5 7.5h3L5 17zm0 0v4"})
  );
}

export default MinaTree;
