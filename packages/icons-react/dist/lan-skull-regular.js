import React from 'react';

export const LanSkullRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 427.4c0-15.1 7.1-29.3 19.2-38.4 47.6-35.8 76.8-89.6 76.8-149 0-103.2-90.2-192-208-192S48 136.8 48 240c0 59.4 29.3 113.2 76.8 149 12.1 9.1 19.2 23.3 19.2 38.4V464h40v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h48v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h40zm48 0V464c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-36.6C37.5 383.4 0 315.8 0 240 0 107.5 114.6 0 256 0s256 107.5 256 240c0 75.8-37.5 143.4-96 187.4M112 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m232-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanSkullRegular;
