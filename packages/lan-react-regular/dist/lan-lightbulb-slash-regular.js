import React from 'react';

export function LanLightbulbSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L410.2 344.3c5.3-7.1 11.1-13.8 17.1-20.2C460 289.7 480 243.2 480 192 480 86 394 0 288 0c-60.7 0-114.8 28.2-150 72.1zm131.2 131.3C198.4 71 240.5 48 288 48c79.5 0 144 64.5 144 144 0 38.4-15 73.2-39.5 99.1-5.5 5.8-11.1 12.1-16.5 19l-135-135c4-17.8 20-31.1 39-31.1 13.3 0 24-10.7 24-24s-10.7-24-24-24c-32 0-60.1 17.1-75.5 42.7zm142 277.6h-77.4c-8.4-39-32-70.5-53.3-92.9-19.4-20.4-32.8-46.4-37.6-75.3l-48.3-48.4c-1 8.1-1.6 16.3-1.6 24.6 0 51.2 20 97.7 52.7 132.1 23.6 24.9 43.3 55.3 43.3 89.6V432c0 44.2 35.8 80 80 80h32c37.5 0 68.9-25.8 77.6-60.6z"})
  );
}

export default LanLightbulbSlashRegular;
