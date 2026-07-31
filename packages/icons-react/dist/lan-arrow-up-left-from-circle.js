import React from 'react';

export const LanArrowUpLeftFromCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 0H16C7.2 0 0 7.2 0 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6l268.7 268.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 32H176c8.8 0 16-7.2 16-16s-7.2-16-16-16m112 64c-8.8 0-16 7.2-16 16s7.2 16 16 16c106 0 192 86 192 192s-86 192-192 192S96 394 96 288c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64"})
);

export default LanArrowUpLeftFromCircle;
