import React from 'react';

export const LanUserQuestion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-224a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-48 336c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144zm320-224c-20.6 0-37.2 16.7-37.2 37.2 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-38.2 31-69.2 69.2-69.2s69.2 31 69.2 69.2c0 35.8-24.3 53.7-42.1 61.7-7.8 3.5-11.1 9.2-11.1 13.1 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-20.8 15.3-35.7 30.1-42.3 12.2-5.4 23.2-14.7 23.2-32.5 0-20.6-16.7-37.2-37.2-37.2zm-20 176a20 20 0 1 1 40 0 20 20 0 1 1-40 0"})
);

export default LanUserQuestion;
