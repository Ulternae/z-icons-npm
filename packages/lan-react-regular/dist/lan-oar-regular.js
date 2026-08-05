import React from 'react';

export function LanOarRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -24.05 576 558.475',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M463-17c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15-193.3 193.3-13.5 101.2c-1.6 12.2-7.2 23.5-15.9 32.2L167 515c-26 25.9-68 25.9-94 0l-44-44c-25.9-26-25.9-68 0-94l122.4-122.3c8.7-8.7 20-14.3 32.2-15.9l101.2-13.5L478.1 32 463 17c-9.4-9.4-9.4-24.6 0-33.9zM189.9 286.4c-1.7.2-3.4 1-4.6 2.3L63 411c-7.2 7.2-7.2 18.9 0 26.1l44 44c7.2 7.2 18.9 7.2 26.1 0l122.3-122.4c1.2-1.2 2-2.9 2.3-4.6l10.4-78.2-78.2 10.4z"})
  );
}

export default LanOarRegular;
