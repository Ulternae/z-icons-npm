import React from 'react';

export function LanFilesMedical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 32c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V176h-80c-35.3 0-64-28.7-64-64V32zm144 80c0 17.7 14.3 32 32 32h66.7L304 45.3zM96 64c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l106.5 106.6c12 12 18.7 28.3 18.7 45.3V384c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-64 48v368c0 17.7 14.3 32 32 32h272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64V112c0-8.8 7.2-16 16-16s16 7.2 16 16m224 80h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
  );
}

export default LanFilesMedical;
