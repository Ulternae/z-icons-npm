import React from 'react';

export function LanPeriodSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 128 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 416c0 35.3-28.7 64-64 64S0 451.3 0 416s28.7-64 64-64 64 28.7 64 64"})
  );
}

export default LanPeriodSolid;
