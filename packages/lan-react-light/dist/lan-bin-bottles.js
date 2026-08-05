import React from 'react';

export function LanBinBottles({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 64v32h-64V64zm-96 0v32c-35.3 0-64 28.7-64 64v32H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h19.2l23 230.4C61.5 487.1 89 512 121.9 512h332.2c32.9 0 60.4-24.9 63.7-57.6l23-230.4H560c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32c0-35.3-28.7-64-64-64V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32c-35.3 0-64 28.7-64 64 0-35.3-28.7-64-64-64V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m416 128H320v-32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32zm-256 0H64v-32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32zM448 64v32h-64V64zM90.1 451.2 67.4 224h441.2l-22.7 227.2c-1.6 16.4-15.4 28.8-31.8 28.8H121.9c-16.4 0-30.2-12.5-31.8-28.8"})
  );
}

export default LanBinBottles;
