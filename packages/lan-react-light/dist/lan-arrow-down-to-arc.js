import React from 'react';

export function LanArrowDownToArc({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480C132.3 480 32 379.7 32 256c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 141.4 114.6 256 256 256s256-114.6 256-256c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 123.7-100.3 224-224 224M132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 297.4V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v281.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6"})
  );
}

export default LanArrowDownToArc;
