import React from 'react';

export function LanTemperatureListSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96c0-53 43-96 96-96s96 43 96 96v164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S16 447.5 16 368c0-42.6 18.5-81 48-107.3zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v92.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64M352 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32"})
  );
}

export default LanTemperatureListSolid;
