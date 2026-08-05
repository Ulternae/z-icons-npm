import React from 'react';

export function MinaRupee({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6.5 3.5h11m-11 4.722h11M14.292 20.5 6.5 12.944h2.75c6.111 0 6.111-9.444 0-9.444"})
  );
}

export default MinaRupee;
