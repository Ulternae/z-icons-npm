import React from 'react';

export const CorePenSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM339 410.5 237.5 512H64.3V338.7l101.5-101.5zM453.8 0c67.7 0 122.5 54.8 122.5 122.5 0 32.5-12.9 63.7-35.9 86.6l-65.6 65.6-173.2-173.2 65.6-65.6c23-23 54.1-35.9 86.6-35.9"})
);

export default CorePenSlashSolid;
