import React from 'react';

export function LanDoorOpen({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-17.7 0-32 14.3-32 32v416h224V64c0-17.7-14.3-32-32-32zm215.4 0c5.4 9.4 8.6 20.3 8.6 32v448H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v416h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V64c0-17.7-14.3-32-32-32zM248 248a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
  );
}

export default LanDoorOpen;
