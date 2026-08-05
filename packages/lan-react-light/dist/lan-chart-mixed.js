import React from 'react';

export function LanChartMixed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M506.8 59.8c6.5-5.9 7-16.1 1.1-22.6s-16.1-7-22.6-1.1L320.5 185.9 203.3 68.7c-5.6-5.6-14.4-6.3-20.7-1.6l-176 128c-7.1 5.2-8.7 15.2-3.5 22.4s15.2 8.7 22.4 3.5l164.9-120 118.3 118.3c6 6 15.8 6.3 22.1.5zM208 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm256 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm-128 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16zM80 336c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
  );
}

export default LanChartMixed;
