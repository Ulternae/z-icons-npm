import React from 'react';

export function MinaPercentage({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19 5 5 19m12.5 1c1.667 0 2.5-.857 2.5-3s-.833-3-2.5-3-2.5.857-2.5 3 .833 3 2.5 3m-11-10C8.167 10 9 9.143 9 7s-.833-3-2.5-3S4 4.857 4 7s.833 3 2.5 3"})
  );
}

export default MinaPercentage;
