import React from 'react';

export function MinaIncognito({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M3 10.412h18m-16-.189.614-2.6c.545-2.31.818-3.466 1.632-4.139.545-.45.81.073 1.601.468 1.004.502 2.177.103 3.186-.39 1.008-.494 2.973-.755 4.036-.393.976.334.983.762 1.391 1.71.733 1.703 1.114 3.54 1.54 5.344M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0-1.206.658-.349a2.85 2.85 0 0 1 2.684 0l.658.349"})
  );
}

export default MinaIncognito;
