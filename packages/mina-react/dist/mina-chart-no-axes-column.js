import React from 'react';

export function MinaChartNoAxesColumn({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18 8v13M12 3v18m-6-9v9"})
  );
}

export default MinaChartNoAxesColumn;
