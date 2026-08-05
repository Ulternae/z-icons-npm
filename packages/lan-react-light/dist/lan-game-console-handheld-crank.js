import React from 'react';

export function LanGameConsoleHandheldCrank({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm384 32v160h32v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v48c0 8.8-7.2 16-16 16h-48v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64M96 128v128h256V128zm-32 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm448 64h32v-32h-32zM128 336v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16s16 7.2 16 16m96 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanGameConsoleHandheldCrank;
