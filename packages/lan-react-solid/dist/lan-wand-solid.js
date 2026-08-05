import React from 'react';

export function LanWandSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M497 7c-9-9-23.5-9.4-33-.9L189.3 251.9c-2.9 2.6-6.7 4.1-10.7 4.1H144c-8.8 0-16 7.2-16 16v27.6c0 4.6-1.9 8.9-5.3 11.9L11.1 411.3C4 417.7 0 426.7 0 436.2c0 8.8 3.5 17.2 9.7 23.5l42.6 42.6c6.2 6.2 14.7 9.8 23.5 9.8 9.5 0 18.5-4 24.8-11.1l271.7-303.7c3-3.4 7.4-5.3 11.9-5.3H400c8.8 0 16-7.2 16-16v-21.4c0-3.9 1.5-7.7 4.1-10.7L505.9 48c8.5-9.5 8.1-24-.9-33z"})
  );
}

export default LanWandSolid;
