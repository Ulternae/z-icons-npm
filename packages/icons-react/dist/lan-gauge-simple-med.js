import React from 'react';

export const LanGaugeSimpleMed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96c35.3 0 64-28.7 64-64 0-29.8-20.4-54.9-48-62V96c0-8.8-7.2-16-16-16s-16 7.2-16 16v194c-27.6 7.1-48 32.2-48 62 0 35.3 28.7 64 64 64"})
);

export default LanGaugeSimpleMed;
