import React from 'react';

export const LanBookOpenReaderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m144 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0M212.4 265.8 232 274v184.4C184.4 441 134 432 83.2 432H48V240h35.2c44.4 0 88.3 8.8 129.2 25.8M428.8 432c-50.8 0-101.2 9-148.8 26.4V274l19.6-8.2c41-17.1 84.9-25.8 129.2-25.8H464v192zM256 232l-25.1-10.5C184.1 202 133.9 192 83.2 192H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h35.2c50.7 0 100.9 10 147.7 29.5l12.8 5.3c7.9 3.3 16.7 3.3 24.6 0l12.8-5.3c46.8-19.5 97-29.5 147.7-29.5H464c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-35.2c-50.7 0-100.9 10-147.7 29.5z"})
);

export default LanBookOpenReaderRegular;
