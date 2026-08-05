import React from 'react';

export function LanTruckBoltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V237.3c0-17-6.7-33.3-18.7-45.3L512 146.7c-12-12-28.3-18.7-45.3-18.7H416V96c0-35.3-28.7-64-64-64zm448 205.3V288h-96v-96h50.7zM152 384a40 40 0 1 1 0 80 40 40 0 1 1 0-80m232 40a40 40 0 1 1 80 0 40 40 0 1 1-80 0M136.5 224c-9.1 0-16.5-7.4-16.5-16.5 0-4.8 2.1-9.3 5.7-12.5l110.4-95.6c2.5-2.2 5.7-3.4 9.1-3.4 9.3 0 16 9.1 13.2 18L234 192h45.5c9.1 0 16.5 7.4 16.5 16.5 0 4.8-2.1 9.3-5.7 12.5l-110.4 95.6c-2.5 2.2-5.7 3.4-9.1 3.4-9.3 0-16-9.1-13.2-18l24.4-78z"})
  );
}

export default LanTruckBoltSolid;
