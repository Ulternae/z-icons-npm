import React from 'react';

export const LanRulerVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 256 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 496V16c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v56h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v56h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v56h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v56h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16M256 80V16c0-26.5-21.5-48-48-48H48C21.5-32 0-10.5 0 16v480c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
);

export default LanRulerVertical;
