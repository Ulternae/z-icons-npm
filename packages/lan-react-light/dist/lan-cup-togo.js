import React from 'react';

export function LanCupTogo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M87.9 42.9 70.2 96h307.6l-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9H103.1c-6.9 0-13 4.4-15.2 10.9M47.6 128H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h20.5l21.1-63.2C64.1 13.2 82.4 0 103.1 0h241.8c20.7 0 39 13.2 45.5 32.8L411.5 96H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H47.7zm27 325.9L48.9 176H81l4.4 48h277.1l4.4-48H399l-25.7 277.9c-3 32.9-30.7 58.1-63.7 58.1H138.3c-33.1 0-60.7-25.2-63.7-58.1m285-197.9H88.5l11.9 128h247.4l11.9-128zm-14.8 160H103.3l3.2 35c1.5 16.5 15.3 29 31.9 29h171.3c16.5 0 30.3-12.6 31.9-29z"})
  );
}

export default LanCupTogo;
