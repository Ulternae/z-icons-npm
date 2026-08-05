import React from 'react';

export function MinaCompassSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m10.186 13.814.907-2.721 2.721-.907-.907 2.721z"}), React.createElement("path", {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-2.763a.75.75 0 0 0-.95-.949l-4.5 1.5a.75.75 0 0 0-.473.475l-1.5 4.5a.75.75 0 0 0 .948.948l4.5-1.5a.75.75 0 0 0 .474-.474z"})
  );
}

export default MinaCompassSolid;
