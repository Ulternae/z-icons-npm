import React from 'react';

export const LanRodSnakeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 48h56c44.2 0 80 35.8 80 80s-35.8 80-80 80h-16v-16h16c35.3 0 64-28.7 64-64s-28.7-64-64-64h-56v240h48c39.8 0 72 32.2 72 72s-32.2 72-72 72h-8v-16h8c30.9 0 56-25.1 56-56s-25.1-56-56-56h-48v184c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V320h-56c-35.3 0-64-28.7-64-64s28.7-64 64-64h16v16h-16c-26.5 0-48 21.5-48 48s21.5 48 48 48h56V64h-56v32c0 35.3-28.7 64-64 64h-8c-30.9 0-56-25.1-56-56s25.1-56 56-56h128V8c0-4.4 3.6-8 8-8s8 3.6 8 8zm-88 16H56c-22.1 0-40 17.9-40 40s17.9 40 40 40h8c26.5 0 48-21.5 48-48z"})
);

export default LanRodSnakeThin;
