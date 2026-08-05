import React from 'react';

export function LanSignal4({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M344 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v320c0 8.8 7.2 16 16 16s16-7.2 16-16zm-120 80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-8.8-7.2-16-16-16m-88 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zM32 400c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
  );
}

export default LanSignal4;
