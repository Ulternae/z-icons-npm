import React from 'react';

export function LanBarcode({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m64 0c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m80 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m80-16c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m80 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m112-16c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16"})
  );
}

export default LanBarcode;
