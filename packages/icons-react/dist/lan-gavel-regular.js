import React from 'react';

export const LanGavelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.4 576 543.4',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224.4 140.1 196.3 112l92.1-92.1L316.5 48zm-67.7.2 39.4 39.4c11.2 11.2 27.4 14.4 41.5 9.5l41.8 41.8-232 232c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l232-232 41.8 41.8c-4.9 14-1.7 30.3 9.5 41.5l39.4 39.4c15.6 15.6 40.9 15.6 56.6 0l103.5-103.3c15.6-15.6 15.6-40.9 0-56.6l-39.4-39.4c-11.2-11.2-27.4-14.4-41.5-9.5L365.6 61.2c4.9-14 1.7-30.3-9.5-41.5l-39.4-39.4c-15.6-15.6-40.9-15.6-56.6 0L156.7 83.7c-15.6 15.6-15.6 40.9 0 56.6M446.5 210l-60.1 60.1-112-112L334.5 98zm78.1 46-92.1 92.1-28.1-28.1 92.1-92.1z"})
);

export default LanGavelRegular;
