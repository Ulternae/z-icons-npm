import React from 'react';

export function LanCircleGuaraniRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-384v9.1c-58.7 7.8-104 58.1-104 118.9s45.3 111.1 104 118.9v9.1c0 8.8 7.2 16 16 16s16-7.2 16-16v-9.1c58.7-7.8 104-58.1 104-118.9 0-13.3-10.7-24-24-24h-80v-46.2c13.2 3 25 9.6 34.4 18.8 9.5 9.3 24.7 9.1 33.9-.3s9.1-24.7-.3-33.9c-18-17.7-41.7-29.7-68-33.2v-9.1c0-8.8-7.2-16-16-16s-16 7.2-16 16zm-56 128c0-34.3 23.9-62.9 56-70.2v140.4c-32.1-7.3-56-35.9-56-70.2m139.9 24c-8.2 23.1-27.7 40.7-51.9 46.2V280z"})
  );
}

export default LanCircleGuaraniRegular;
