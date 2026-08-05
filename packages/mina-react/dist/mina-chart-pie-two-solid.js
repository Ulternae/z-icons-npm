import React from 'react';

export function MinaChartPieTwoSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.75 3.784v7.905l5.59 5.59a8.25 8.25 0 0 0-5.59-13.496M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.72 9.72 0 0 1-2.856 6.894A9.72 9.72 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"})
  );
}

export default MinaChartPieTwoSolid;
