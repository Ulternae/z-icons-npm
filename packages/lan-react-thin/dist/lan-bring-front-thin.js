import React from 'react';

export function LanBringFrontThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160-16H64C37.5-16 16 5.5 16 32v96c0 26.5 21.5 48 48 48h16v16H64c-35.3 0-64-28.7-64-64V32C0-3.3 28.7-32 64-32h96c35.3 0 64 28.7 64 64v16h-16V32c0-26.5-21.5-48-48-48m192 480h16v16c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-16v-16h16c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64zm-44.7-352L144 275.3V352c0 10.4 3.3 20 8.9 27.8l1.5-1.5 256-256 1.5-1.5c-7.8-5.6-17.4-8.9-27.8-8.9h-76.7zM304 96h80c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM144 252.7 284.7 112H192c-26.5 0-48 21.5-48 48zm277.7-119-256 256-1.5 1.5c7.8 5.6 17.4 8.9 27.8 8.9h76.7L432 236.8v-76.7c0-10.4-3.3-20-8.9-27.8l-1.5 1.5zM291.3 400H384c26.5 0 48-21.5 48-48v-92.7z"})
  );
}

export default LanBringFrontThin;
