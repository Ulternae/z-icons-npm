import React from 'react';

export const LanCircle2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-350.7c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.8c12.2 0 22.2 9.9 22.2 22.2 0 8.7-5.1 16.5-12.9 20.2l-36.4 16.7c-28.4 13-46.7 41.4-46.7 72.7V336c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-79.7c1.8-16.7 12.2-31.5 27.7-38.6l36.4-16.7c19.3-8.8 31.6-28.1 31.6-49.2 0-29.9-24.3-54.2-54.2-54.2z"})
);

export default LanCircle2;
