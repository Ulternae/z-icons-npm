import React from 'react';

export function MinaChartNoAxesGanttSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18 17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm-2-4a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm4-4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-3-4a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z"})
  );
}

export default MinaChartNoAxesGanttSolid;
