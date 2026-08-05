import React from 'react';

export function LanTruckRampBoxRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c-35.3 0-64 28.7-64 64v278.1L17.1 465C4.4 468.8-2.8 482.2 1 494.9s17.2 19.9 29.9 16.1l316.6-95h52.8c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88-39.4-88-88-88c-27.3 0-51.7 12.5-67.9 32h-52.1V96c0-8.8 7.2-16 16-16h192V32h-192zm64 392a40 40 0 1 1 80 0 40 40 0 1 1-80 0M65.9 195.4l91.8-28.1c8.5-2.6 17.4 2.2 20 10.6l28.1 91.8c2.6 8.4-2.2 17.4-10.6 20l-91.8 28.1c-8.5 2.6-17.4-2.2-20-10.6l-28.1-91.9c-2.6-8.5 2.2-17.4 10.6-20zm-56.5 34 28.1 91.8c10.3 33.8 46.1 52.8 79.9 42.5l91.8-28.1c33.8-10.3 52.8-46.1 42.5-79.9l-28.1-91.8c-10.3-33.8-46.1-52.8-79.9-42.5l-91.8 28.1C18.1 159.8-.9 195.6 9.4 229.4"})
  );
}

export default LanTruckRampBoxRegular;
