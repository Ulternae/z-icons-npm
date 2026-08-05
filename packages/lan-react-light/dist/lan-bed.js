import React from 'react';

export function LanBed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h512v80c0 8.8 7.2 16 16 16s16-7.2 16-16V256c0-61.9-50.1-112-112-112H336c-26.5 0-48 21.5-48 48v160H32zm432 128c44.2 0 80 35.8 80 80v96H320V192c0-8.8 7.2-16 16-16zm-352 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
  );
}

export default LanBed;
