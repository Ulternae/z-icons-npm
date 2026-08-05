import React from 'react';

export function LanChartLineUpDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32c8.8 0 16 7.2 16 16v352c0 26.5 21.5 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16m352 64c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-57.4L299.3 267.3c-6.2 6.2-16.4 6.2-22.6 0L208 198.6l-84.7 84.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7l68.7 68.7L425.4 96zm57.4 256L354 280.6l22.6-22.6 71.4 71.4V272c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
  );
}

export default LanChartLineUpDown;
