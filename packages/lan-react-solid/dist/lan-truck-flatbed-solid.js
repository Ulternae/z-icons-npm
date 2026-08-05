import React from 'react';

export function LanTruckFlatbedSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M456.4 96c24.2 0 46.4 13.7 57.2 35.4l55.6 111.1c4.3 8.5 6.8 18.3 6.8 28.6V352c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H236.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h304V128c0-17.7 14.3-32 32-32zM416 256h88.4l-48-96H416zM192 392a40 40 0 1 0-80 0 40 40 0 1 0 80 0m232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
  );
}

export default LanTruckFlatbedSolid;
