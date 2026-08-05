import React from 'react';

export function LanManatSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 32c-8.8 0-16 7.2-16 16v48.7C77.4 104.8 0 187.3 0 288v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-83 63.1-151.2 144-159.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V128.8c80.9 8 144 76.2 144 159.2v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-100.7-77.4-183.2-176-191.3V48c0-8.8-7.2-16-16-16"})
  );
}

export default LanManatSign;
