import React from 'react';

export const LanAsterisk = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 0c8.8 0 16 7.2 16 16v212.3l184-106.2c7.7-4.4 17.4-1.8 21.9 5.9s1.8 17.4-5.9 21.9L256 256l184 106.1c7.7 4.4 10.3 14.2 5.9 21.9s-14.2 10.3-21.9 5.9L240 283.7V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V283.7L24 389.9c-7.7 4.4-17.4 1.8-21.9-5.9S.4 366.6 8 362.1L192 256 8 149.9C.4 145.4-2.3 135.7 2.1 128s14.2-10.3 21.9-5.9l184 106.2V16c0-8.8 7.2-16 16-16"})
);

export default LanAsterisk;
