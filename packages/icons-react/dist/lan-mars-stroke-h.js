import React from 'react';

export const LanMarsStrokeH = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352.5 256c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144m-144-176c91.8 0 167.2 70.3 175.3 160h48.7v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h68.7l-32.8-37.5c-5.8-6.7-5.1-16.8 1.5-22.6s16.8-5.1 22.6 1.5l56 64c5.3 6 5.3 15 0 21.1l-56 64c-5.8 6.6-15.9 7.3-22.6 1.5s-7.3-15.9-1.5-22.6l32.8-37.5h-68.7v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48.7c-8.1 89.7-83.5 160-175.3 160-97.2 0-176-78.8-176-176s78.8-176 176-176z"})
);

export default LanMarsStrokeH;
