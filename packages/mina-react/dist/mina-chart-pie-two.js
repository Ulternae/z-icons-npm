import React from 'react';

export function MinaChartPieTwo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 3a9 9 0 1 0 6.364 15.364M12 3a9 9 0 0 1 6.364 15.364M12 3v9l6.364 6.364"})
  );
}

export default MinaChartPieTwo;
