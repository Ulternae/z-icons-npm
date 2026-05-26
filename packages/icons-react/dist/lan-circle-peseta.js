import React from 'react';

export const LanCirclePeseta = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-368v64h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c47.6 0 87-34.6 94.7-80H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-17.3c-7.6-45.4-47.1-80-94.7-80h-64c-8.8 0-16 7.2-16 16m80 16c29.8 0 54.9 20.4 62 48H208v-48zm-48 128v-48h110c-7.1 27.6-32.2 48-62 48z"})
);

export default LanCirclePeseta;
