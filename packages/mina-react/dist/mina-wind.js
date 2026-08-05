import React from 'react';

export function MinaWind({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18.325 7c3.485 0 3.485 5 0 5H3m15.411 9c3.452 0 3.452-5 0-5H3m7.872-13c3.506 0 3.506 5 0 5H3"})
  );
}

export default MinaWind;
