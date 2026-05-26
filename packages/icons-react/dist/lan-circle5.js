import React from 'react';

export const LanCircle5 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m48-352h-96c-8.8 0-16 7.2-16 16v72c0 8.8 7.2 16 16 16h68c15.5 0 28 12.5 28 28s-12.5 28-28 28h-68c-8.8 0-16 7.2-16 16s7.2 16 16 16h68c33.1 0 60-26.9 60-60s-26.9-60-60-60h-52v-40h80c8.8 0 16-7.2 16-16s-7.2-16-16-16"})
);

export default LanCircle5;
