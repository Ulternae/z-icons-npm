import React from 'react';

export function LanBinBottlesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 48c8.8 0 16 7.2 16 16v32h-96V64c0-8.8 7.2-16 16-16zM96 64v32c-35.3 0-64 28.7-64 64v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h25.6l24.6 246.4C61.5 487.1 89 512 121.9 512h332.2c32.9 0 60.4-24.9 63.7-57.6L542.4 208H568c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-32c0-35.3-28.7-64-64-64V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32c-35.3 0-64 28.7-64 64 0-35.3-28.7-64-64-64V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m432 128H304v-32c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48zm-256 0H48v-32c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48zM448 48c8.8 0 16 7.2 16 16v32h-96V64c0-8.8 7.2-16 16-16zM304 208h222.3l-24.5 244.8c-2.5 24.5-23.1 43.2-47.8 43.2H121.8c-24.7 0-45.3-18.7-47.8-43.2L49.7 208z"})
  );
}

export default LanBinBottlesThin;
