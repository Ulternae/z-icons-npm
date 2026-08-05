import React from 'react';

export function MinaChartSpline({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3"}), React.createElement("path", {"d":"M19 17c-3.355-1.678-3.924-6.346-5.089-9.58-.476-1.322-2.346-1.322-2.822 0C9.924 10.654 9.355 15.322 6 17"})
  );
}

export default MinaChartSpline;
