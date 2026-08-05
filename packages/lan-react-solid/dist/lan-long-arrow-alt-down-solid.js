import React from 'react';

export function LanLongArrowAltDownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.052 -32 320.13 575.975',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M137.4 534.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S300.9 352 288 352h-64V16c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v336H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 7 34.8z"})
  );
}

export default LanLongArrowAltDownSolid;
