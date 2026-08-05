import React from 'react';

export function LanNoteMedical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v197.5c0 8.5-3.4 16.6-9.4 22.6L284.1 438.6c-6 6-14.1 9.4-22.6 9.4zM0 416c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l122.5-122.6c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm208-256c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
  );
}

export default LanNoteMedical;
