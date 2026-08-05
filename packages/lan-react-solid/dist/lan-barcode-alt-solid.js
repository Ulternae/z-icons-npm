import React from 'react';

export function LanBarcodeAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm56 96c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m56 16c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16zm88-16c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m56 16c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16zm80-16c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16"})
  );
}

export default LanBarcodeAltSolid;
