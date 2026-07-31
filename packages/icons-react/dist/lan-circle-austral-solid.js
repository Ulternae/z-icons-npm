import React from 'react';

export const LanCircleAustralSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 528a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-325.5L239.4 240h33.2zm27.4-56.7 41.7 94.2H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-28.7l10.6 24H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-3.9l9.9 22.3c5.4 12.1-.1 26.3-12.2 31.7s-26.3-.1-31.7-12.2l-18.5-41.7H200.4l-18.5 41.7c-5.4 12.1-19.5 17.6-31.7 12.2s-17.6-19.5-12.2-31.7l9.9-22.3H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h18.1l10.6-24H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9l41.7-94.2C233.4 135 244.1 128 256 128s22.6 7 27.4 17.8M225.2 272l-10.6 24h82.8l-10.6-24z"})
);

export default LanCircleAustralSolid;
