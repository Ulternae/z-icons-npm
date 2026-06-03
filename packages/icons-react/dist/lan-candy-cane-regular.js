import React from 'react';

export const LanCandyCaneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.15 512 568.125',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M269.3 84.9 249.1 105c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L235.3 51c13.1-13.1 28.5-22.5 44.9-28.3V76c-3.9 2.6-7.5 5.6-10.9 9zM347.1 69a69.8 69.8 0 0 0-19-4.8V16c19.9 1.3 39.6 7.6 56.9 18.8zm36.2 32 36.2-32.6c10.7 15.7 17.3 33.4 19.7 51.6h-48.7c-1.5-6.6-3.9-12.9-7.2-19m52.7 67c-4.8 17.3-13.5 33.8-26.2 48h-67.6l29.1-29.1c5.7-5.7 10.2-12.1 13.6-18.9zM254.2 304l40-40h67.9l-40 40zm19.9 48-40 40h-67.9l40-40zm-162.9 95 7-7h67.9l-41 41c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zm192-328.2c9.3-9.3 24.6-9.4 34.1.1s9.4 24.8.1 34.1L77.3 413.1c-28.1 28.1-28.1 73.7 0 101.8s73.7 28.1 101.8 0l260.1-260.1c65.7-65.7 65.4-172.2-.1-237.7s-172-65.8-237.7-.1l-20.1 20.1c-28.1 28.1-28.1 73.7 0 101.8s73.7 28.1 101.8 0z"})
);

export default LanCandyCaneRegular;
