import React from 'react';

export function LanParkingCircleSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M412.5 367.2 342.3 297c20.6-17.6 33.7-43.8 33.7-73 0-53-43-96-96-96h-72c-9.7 0-18.6 3.5-25.5 9.2l-37.7-37.7C176.2 77.1 214.6 64 256 64c106 0 192 86 192 192 0 41.5-13.1 79.9-35.5 111.2m-45.3 45.3C335.8 434.9 297.4 448 256 448c-106 0-192-86-192-192 0-41.5 13.1-79.9 35.5-111.2l68.5 68.5V352c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h42.7zm-70.6-161.1L237.3 192H280c17.7 0 32 14.3 32 32 0 11.6-6.2 21.7-15.4 27.4M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
  );
}

export default LanParkingCircleSlashSolid;
