import React from 'react';

export const LanEuroSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M57.3 192C84.8 99.5 170.5 32 272 32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-83.6 0-154.7 53.4-181.1 128H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H82.7C81 234.4 80 245.1 80 256s.9 21.6 2.7 32H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H90.9c26.4 74.6 97.5 128 181.1 128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-101.5 0-187.2-67.5-214.7-160H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h34.3c-1.5-10.5-2.3-21.1-2.3-32s.8-21.5 2.3-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanEuroSign;
