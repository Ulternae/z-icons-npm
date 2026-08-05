import React from 'react';

export function LanMartiniGlassEmpty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M1.4 41.5C3.9 35.7 9.7 32 16 32h480c6.3 0 12.1 3.7 14.6 9.5s1.5 12.5-2.8 17.2L272 318.2V480h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h96V318.2L4.2 58.8c-4.3-4.7-5.4-11.5-2.8-17.3M256 288.2 459.8 64H52.2z"})
  );
}

export default LanMartiniGlassEmpty;
