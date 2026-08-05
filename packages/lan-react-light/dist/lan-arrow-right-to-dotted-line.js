import React from 'react';

export function LanArrowRightToDottedLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M488 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48M379.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L329.4 240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h313.4L212.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM512 312a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24-88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24-136a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanArrowRightToDottedLine;
