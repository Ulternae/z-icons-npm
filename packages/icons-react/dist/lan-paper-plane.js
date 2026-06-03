import React from 'react';

export const LanPaperPlane = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -27.882 576 555.782',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M275 292 524.1 42.8 362.5 494.1c-.4 1.1-1.5 1.9-2.7 1.9s-2.2-.7-2.6-1.8zM501.5 20.2 252.4 269.4 50.1 187.2c-1.1-.4-1.8-1.5-1.8-2.6 0-1.2.8-2.3 1.9-2.7zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3l-496.9 178c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z"})
);

export default LanPaperPlane;
