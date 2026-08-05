import React from 'react';

export function LanDoorClosed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 32c17.7 0 32 14.3 32 32v416H64V64c0-17.7 14.3-32 32-32zm64 448V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-96-256a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
  );
}

export default LanDoorClosed;
