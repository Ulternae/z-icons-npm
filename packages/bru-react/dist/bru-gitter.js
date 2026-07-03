import React from 'react';

export function BruGitter({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"d":"M66.4 322.5H16V0h50.4zM166.9 76.1h-50.4V512h50.4zm100.6 0h-50.4V512h50.4zM368 76h-50.4v247H368z"})
  );
}

export default BruGitter;
