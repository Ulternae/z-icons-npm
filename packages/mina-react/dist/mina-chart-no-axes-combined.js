import React from 'react';

export function MinaChartNoAxesCombined({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m3 12.5 3.857-3.213c1.634-1.362 2.708-1.222 4.119.189l.006.006c1.538 1.538 2.64 1.474 4.172.133L21 4.5M10 21v-8m-5 8v-6m14 6V11m-4.5 10v-7"})
  );
}

export default MinaChartNoAxesCombined;
