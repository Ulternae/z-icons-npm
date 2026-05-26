import React from 'react';

export const LanWavesSine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 432c0 8.8 7.2 16 16 16 45.2 0 85.9-27.3 103-69.2l7-17.2-17.3-42.3-19.4 47.3C77.2 396.5 48.2 416 16 416c-8.8 0-16 7.2-16 16m152-218.3-33-80.6C101.9 91.3 61.2 64 16 64 7.2 64 0 71.2 0 80s7.2 16 16 16c32.2 0 61.2 19.5 73.4 49.3L185 378.8c17.1 41.8 57.8 69.2 103 69.2s85.9-27.3 103-69.2l7-17.2-17.3-42.3-19.4 47.3C349.2 396.5 320.2 416 288 416s-61.2-19.5-73.4-49.3L169.3 256l45.3-110.7C226.8 115.5 255.8 96 288 96s61.2 19.5 73.4 49.3L457 378.8c17.1 41.8 57.8 69.2 103 69.2 8.8 0 16-7.2 16-16s-7.2-16-16-16c-32.2 0-61.2-19.5-73.4-49.3L441.3 256l45.3-110.7C498.8 115.5 527.8 96 560 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.2 0-85.9 27.3-103 69.2l-33 80.6-33-80.6C373.9 91.3 333.2 64 288 64s-85.9 27.3-103 69.2l-33 80.6z"})
);

export default LanWavesSine;
