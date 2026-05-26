import React from 'react';

export const LanPersonFallingBurst = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 8c0-8.8-7.2-16-16-16S240-.8 240 8v8.2c0 49.2-25.2 95.1-66.7 121.5l-27.8 17.7C94.7 187.7 64 243.7 64 303.8V392c0 8.8 7.2 16 16 16s16-7.2 16-16v-88.2c0-24.5 6.2-48.1 17.6-68.9l226.1 271.3c5.7 6.8 15.7 7.7 22.5 2s7.7-15.7 2-22.5L246.8 344.8l63.2-56.9h82.2l59.2 74c5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5l-59.2-74c-6.1-7.6-15.3-12-25-12h-97l-88.4-103.2c41-33.1 65.2-83.2 65.2-136.5zm.7 270.7-46.2 41.6-93.7-112.5c8.7-9.7 18.7-18.3 30-25.5l17.7-11.3 92.2 107.6zM48 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0m256-7.9v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16m112 144h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16m-48.8-95.2c6.2 6.2 16.4 6.2 22.6 0l34-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6z"})
);

export default LanPersonFallingBurst;
