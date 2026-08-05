import React from 'react';

export function LanSquareGuaraniSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm144 96c0-8.8 7.2-16 16-16s16 7.2 16 16v9.1c26.3 3.5 50 15.6 68 33.2 9.5 9.3 9.6 24.5.3 33.9s-24.5 9.6-33.9.3c-9.4-9.2-21.2-15.8-34.4-18.8v46.2h80c13.3 0 24 10.7 24 24 0 60.8-45.3 111.1-104 118.9v9.1c0 8.8-7.2 16-16 16s-16-7.2-16-16v-9.1c-58.7-7.8-104-58.1-104-118.9S149.3 144.8 208 137v-9.1zm-56 128c0 34.3 23.9 62.9 56 70.2V185.8c-32.1 7.3-56 36-56 70.2m139.9 24H240v46.2c24.2-5.5 43.8-23.2 51.9-46.2"})
  );
}

export default LanSquareGuaraniSolid;
