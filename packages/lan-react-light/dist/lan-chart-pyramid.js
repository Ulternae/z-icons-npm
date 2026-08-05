import React from 'react';

export function LanChartPyramid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32c2.9 0 5.6 1.6 7 4.2L347.2 192H164.8L249 36.2c1.4-2.6 4.1-4.2 7-4.2M147.5 224h216.9l51.8 96H95.6l51.8-96zm286 128 45.5 84.2c1.3 2.5 1.3 5.5-.2 7.9s-4.1 3.9-6.9 3.9H40c-2.8 0-5.4-1.5-6.9-3.9s-1.5-5.4-.2-7.9L78.4 352zM291.2 21c-7-12.9-20.5-21-35.2-21s-28.2 8.1-35.2 21L4.8 421c-6.7 12.4-6.4 27.4.8 39.5S25.9 480 40 480h432c14.1 0 27.1-7.4 34.4-19.5s7.5-27.1.8-39.5z"})
  );
}

export default LanChartPyramid;
