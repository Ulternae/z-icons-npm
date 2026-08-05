import React from 'react';

export function LanFilterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 80c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l185 185c1.5 1.5 2.3 3.5 2.3 5.7v118c0 4.2 1.7 8.3 4.7 11.3l64 64c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V297.9c0-2.1.8-4.2 2.3-5.7l185-185c4.6-4.6 5.9-11.5 3.5-17.4S486.5 80 480 80zM2.4 83.8C7.4 71.8 19.1 64 32 64h448c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L320 301.3V480c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64c-6-6-9.4-14.1-9.4-22.6l.1-114.8L9.4 118.6c-9.2-9.1-11.9-22.9-7-34.8"})
  );
}

export default LanFilterThin;
