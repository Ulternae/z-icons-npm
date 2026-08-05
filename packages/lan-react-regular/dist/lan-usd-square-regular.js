import React from 'react';

export function LanUsdSquareRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm248 48v8h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-57.4c-8 0-14.6 6.5-14.6 14.6 0 7.2 5.3 13.4 12.5 14.4l45.8 6.5c30.8 4.4 53.7 30.8 53.7 61.9 0 32.3-24.5 58.9-56 62.2v8.3c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h65.4c8 0 14.6-6.5 14.6-14.6 0-7.2-5.3-13.4-12.5-14.4l-45.8-6.5c-30.8-4.4-53.7-30.8-53.7-61.9 0-32.3 24.5-58.9 56-62.2V144c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanUsdSquareRegular;
