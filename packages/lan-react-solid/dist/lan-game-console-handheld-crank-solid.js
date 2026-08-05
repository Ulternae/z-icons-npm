import React from 'react';

export function LanGameConsoleHandheldCrankSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM176 320c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16m168 16a24 24 0 1 0 0 48 24 24 0 1 0 0-48m80 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192-192c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-8v72c0 13.3-10.7 24-24 24h-24V168l.1-2.5c1.2-12.1 11.5-21.5 23.9-21.5zM160 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"})
  );
}

export default LanGameConsoleHandheldCrankSolid;
