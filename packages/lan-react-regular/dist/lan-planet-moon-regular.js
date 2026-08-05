import React from 'react';

export function LanPlanetMoonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128M224 464c97.2 0 176-78.8 176-176 0-82.2-56.4-151.3-132.6-170.6l-71 82.9c-11.5 13.4-10.7 33.4 1.8 45.9 6.3 6.3 14.9 9.9 23.9 9.9h66c17.7 0 32 14.3 32 32V304c0 10.6-2.6 21-7.7 30.3l-41.3 76.6c-4.4 8.1-12.8 13.2-22 13.2-13.8 0-25-11.2-25-25v-47c-17.7 0-32-14.3-32-32v-32l-49.9-49.9c-9-9-21.2-14.1-33.9-14.1L60 224c-7.7 19.8-12 41.4-12 64 0 97.2 78.8 176 176 176M0 288c0-52.3 17.9-100.5 48-138.6 1-1.3 2.1-2.6 3.2-3.9C92.3 95.7 154.5 64 224 64c13.3 0 26.4 1.2 39.1 3.4C368.2 85.9 448 177.6 448 288c0 123.7-100.3 224-224 224S0 411.7 0 288"})
  );
}

export default LanPlanetMoonRegular;
