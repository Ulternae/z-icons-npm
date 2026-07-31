import React from 'react';

export const LanDongSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 0c-8.8 0-16 7.2-16 16v48H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h112v117.5c-26.4-32.6-66.8-53.5-112-53.5-79.5 0-144 64.5-144 144s64.5 144 144 144c45.2 0 85.6-20.9 112-53.5V432c0 8.8 7.2 16 16 16s16-7.2 16-16V96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V16c0-8.8-7.2-16-16-16M64 304a112 112 0 1 1 224 0 112 112 0 1 1-224 0M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanDongSign;
