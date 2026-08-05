import React from 'react';

export function MinaFiveCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"})
  );
}

export default MinaFiveCircle;
