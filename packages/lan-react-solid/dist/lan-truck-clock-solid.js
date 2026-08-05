import React from 'react';

export function LanTruckClockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V237.3c0-17-6.7-33.3-18.7-45.3L512 146.7c-12-12-28.3-18.7-45.3-18.7H416V96c0-35.3-28.7-64-64-64zm448 205.3V288h-96v-96h50.7zM152 384a40 40 0 1 1 0 80 40 40 0 1 1 0-80m232 40a40 40 0 1 1 80 0 40 40 0 1 1-80 0M96 208a112 112 0 1 1 224 0 112 112 0 1 1-224 0m112-65.8c-8.8 0-16 7.2-16 16V208c0 8.8 7.2 16 16 16h37.3c8.8 0 16-7.2 16-16s-7.2-16-16-16H224v-33.8c0-8.8-7.2-16-16-16"})
  );
}

export default LanTruckClockSolid;
