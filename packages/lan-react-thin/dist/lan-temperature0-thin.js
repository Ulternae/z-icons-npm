import React from 'react';

export function LanTemperature0Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 96c0-44.2 35.8-80 80-80s80 35.8 80 80v168.3c0 2.3 1 4.6 2.8 6.1 27.7 23.5 45.2 58.5 45.2 97.6 0 70.7-57.3 128-128 128S32 438.7 32 368c0-39.1 17.5-74.1 45.2-97.6 1.8-1.5 2.8-3.8 2.8-6.1zm80-96c-53 0-96 43-96 96v164.7C34.6 287 16 325.4 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.6-81-48-107.3V96c0-53-43-96-96-96m48 368c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48m16 0c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64"})
  );
}

export default LanTemperature0Thin;
