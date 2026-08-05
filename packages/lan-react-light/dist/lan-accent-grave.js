import React from 'react';

export function LanAccentGrave({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64.2 65.3C64.2 46.9 79.1 32 97.5 32c16.1 0 30 11.6 32.8 27.5l22.5 126.2c.6 3.3-1.9 6.3-5.3 6.3-1.7 0-3.4-.8-4.4-2.3L70.6 86.9C66.5 81 64.2 74 64.2 66.8zm-32 0v1.5c0 13.8 4.3 27.3 12.2 38.5L117 208.2c7 9.9 18.4 15.8 30.5 15.8 23.3 0 40.9-21 36.8-43.9L161.9 53.8C156.3 22.7 129.2 0 97.6 0 61.5 0 32.2 29.2 32.2 65.3"})
  );
}

export default LanAccentGrave;
