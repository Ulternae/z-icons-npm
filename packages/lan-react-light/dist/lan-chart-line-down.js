import React from 'react';

export function LanChartLineDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm288 288c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.4L331.3 180.7c-6.2-6.2-16.4-6.2-22.6 0L224 265.4 123.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l84.7-84.7L425.4 320H336c-8.8 0-16 7.2-16 16"})
  );
}

export default LanChartLineDown;
