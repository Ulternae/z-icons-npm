import React from 'react';

export function LanGasPumpSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-67.7-67.7C526.9 420.1 544 392 544 360V156.4c0-13.9-5.2-27.4-14.6-37.7l-71.6-78.8c-8.9-9.8-24.1-10.5-33.9-1.6s-10.5 24.1-1.6 33.9l25.8 28.3V160c0 29.8 20.4 54.9 48 62v138c0 19-13.3 35-31.1 39L352 286.2V64c0-35.3-28.7-64-64-64H128c-17.2 0-32.8 6.8-44.3 17.8zm76.7 76.7c2.8-2.4 6.4-3.8 10.4-3.8h160c8.8 0 16 7.2 16 16v174.2zM112 464V181.8l-48-48v331.5c-9.3 3.3-16 12.2-16 22.6s6.7 19.3 16 22.6v1.4h288v-1.4c9.3-3.3 16-12.2 16-22.6s-6.7-19.3-16-22.6v-43.5l-48-48V464z"})
  );
}

export default LanGasPumpSlashRegular;
