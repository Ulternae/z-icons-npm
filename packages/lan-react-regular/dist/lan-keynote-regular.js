import React from 'react';

export function LanKeynoteRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M182.4 72H152c-22.1 0-40 17.9-40 40v16h238.4c20.2 0 38.2 12.6 45.1 31.6l50.1 137.6c1.6 4.5 2.5 9.2 2.5 13.9 0 22.5-18.3 40.8-40.8 40.8H248.1v112h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-144c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-112H40.9C18.4 351.9.1 333.6.1 311.1c0-4.8.8-9.5 2.5-13.9L64 128v-16c0-48.6 39.4-88 88-88h30.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24M51.1 304h345.8l-46.5-128H97.6z"})
  );
}

export default LanKeynoteRegular;
