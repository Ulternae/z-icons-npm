import React from 'react';

export function LanTentArrowDownToLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M107.3 187.3c-6.2 6.2-16.4 6.2-22.6 0l-72-72c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L80 137.4V16c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM131.6 480 156 261c1.1-9.9 6.7-18.7 15.2-23.8L334.3 138c10.2-6.2 22.9-6.2 33.1-.1l165.3 99.2c8.6 5.1 14.2 14 15.3 23.9l25 224.3c1.6 14.2-9.5 26.7-23.9 26.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16zm236.4 0h66.9L368 374.9zm-32 0V174.5l-148.2 90-24 215.5zm32-304.4v139.7L472.8 480h67.4l-24-215.4z"})
  );
}

export default LanTentArrowDownToLine;
