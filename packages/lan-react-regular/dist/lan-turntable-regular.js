import React from 'react';

export function LanTurntableRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 368a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64m256-88c0-13.3-10.7-24-24-24s-24 10.7-24 24v143.8c0 1.3-.3 2.7-1 3.8l-44.1 80.8c-6.3 11.6-2.1 26.2 9.6 32.6s26.2 2.1 32.6-9.6l44.1-80.8c4.5-8.2 6.8-17.4 6.8-26.8z"})
  );
}

export default LanTurntableRegular;
