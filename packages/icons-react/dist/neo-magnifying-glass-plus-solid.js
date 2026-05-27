import React from 'react';

export const NeoMagnifyingGlassPlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 0C158.1 0 101.5 21.1 61.3 61.3S0 158.1 0 224s21.1 122.5 61.3 162.7S158.1 448 224 448s122.5-21.1 162.7-61.3S448 289.9 448 224s-21.1-122.5-61.3-162.7S289.9 0 224 0m28 140v56h56c15.5 0 28 12.5 28 28s-12.5 28-28 28h-56v56c0 15.5-12.5 28-28 28s-28-12.5-28-28v-56h-56c-15.5 0-28-12.5-28-28s12.5-28 28-28h56v-56c0-15.5 12.5-28 28-28s28 12.5 28 28m162.2 274.2c10.9-10.9 28.7-10.9 39.6 0l98 98c10.9 10.9 10.9 28.7 0 39.6s-28.7 10.9-39.6 0l-98-98c-10.9-10.9-10.9-28.7 0-39.6"})
);

export default NeoMagnifyingGlassPlusSolid;
