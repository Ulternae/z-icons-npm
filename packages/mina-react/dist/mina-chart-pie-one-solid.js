import React from 'react';

export function MinaChartPieOneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.75 3.784v7.466h7.466a8.25 8.25 0 0 0-7.466-7.466m7.466 8.966H12.75v7.466a8.25 8.25 0 0 0 7.466-7.466M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"})
  );
}

export default MinaChartPieOneSolid;
