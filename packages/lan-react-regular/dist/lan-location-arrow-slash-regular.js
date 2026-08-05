import React from 'react';

export function LanLocationArrowSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L407.5 341.7 509.9 75.5c4.5-11.8 1.7-25.2-7.2-34.1s-22.3-11.8-34.1-7.2L202.4 136.5zm198.5 198.5 212.7-81.8-81.8 212.7zm93.2 228.8-11.6 30.1-20.9-62.6L174 243.7l-62.6-20.9 30.1-11.6-37.1-37.1L52.5 194c-12.6 5-20.8 17.2-20.5 30.7s9.1 25.4 21.9 29.6l176.8 58.9L289.6 490c4.3 12.8 16.1 21.6 29.6 21.9s25.7-7.9 30.6-20.5l19.9-51.9-37.1-37.1z"})
  );
}

export default LanLocationArrowSlashRegular;
