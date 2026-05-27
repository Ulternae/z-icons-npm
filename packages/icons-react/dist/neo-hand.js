import React from 'react';

export const NeoHand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M308 28c0-15.5-12.5-28-28-28s-28 12.5-28 28v252c0 15.5 12.5 28 28 28s28-12.5 28-28zM196 84c0-15.5-12.5-28-28-28s-28 12.5-28 28v252c0 15.5 12.5 28 28 28s28-12.5 28-28zm224 0c0-15.5-12.5-28-28-28s-28 12.5-28 28v196c0 15.5 12.5 28 28 28s28-12.5 28-28zm112 84c0-15.5-12.5-28-28-28s-28 12.5-28 28v140c0 62.4-19.7 110.8-52.5 143.5S342.4 504 280 504h-10c-70.3 0-135.3-37.7-170.2-98.8l-47.5-83.1c-7.7-13.4-24.8-18.1-38.2-10.4S-4 336.5 3.7 349.9L51.2 433C96.1 511.5 179.6 560 270 560h10c74.5 0 138.1-23.8 183.1-68.9S532 382.5 532 308z"})
);

export default NeoHand;
