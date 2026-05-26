import React from 'react';

export const LanChair = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 0C135.6 0 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v48c0 20.9 13.4 38.7 32 45.3V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h320v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-98.7c18.6-6.6 32-24.4 32-45.3v-48c0-26.5-21.5-48-48-48h-16v-96C384 71.6 312.4 0 224 0m128 256h-64V49.1c38.3 22.1 64 63.5 64 110.9zM256 36v220h-64V36c10.2-2.6 21-4 32-4s21.8 1.4 32 4m-96 13.1V256H96v-96c0-47.4 25.7-88.7 64-110.9M64 288h336c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16z"})
);

export default LanChair;
