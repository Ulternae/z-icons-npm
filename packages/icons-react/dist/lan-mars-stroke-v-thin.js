import React from 'react';

export const LanMarsStrokeVThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.05 384 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 176c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160M16 336c0-94.5 74.5-171.6 168-175.8V112h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V-6.4L133.3 38c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3l64-56c3-2.6 7.5-2.6 10.5 0l64 56c3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3.8L200-6.4V96h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v48.2c93.5 4.2 168 81.3 168 175.8 0 97.2-78.8 176-176 176S16 433.2 16 336"})
);

export default LanMarsStrokeVThin;
