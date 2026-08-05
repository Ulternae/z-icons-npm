import React from 'react';

export function LanSquareWonSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32.7 97.1c12.6-4 26.1 3 30.2 15.6l30.4 95.3h19.3l24.3-94c2.7-10.6 12.2-17.9 23.1-18s20.5 7.2 23.3 17.8l25.4 94.2H292l29.2-95.1c3.9-12.7 17.3-19.8 30-15.9s19.8 17.3 15.9 30L342 240h10c8.8 0 16 7.2 16 16s-7.2 16-16 16h-19.8L303 367.1c-3.1 10.2-12.7 17.1-23.4 16.9s-20-7.4-22.7-17.8L231.5 272h-13.7l-24.3 94c-2.7 10.4-11.9 17.7-22.6 18s-20.3-6.5-23.5-16.7L117 272H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h10.8l-25.7-80.7c-4-12.6 3-26.1 15.6-30.2m71.2 144.2.4-1.4h-.8zm113.7 0 .4-1.4h-.8z"})
  );
}

export default LanSquareWonSolid;
