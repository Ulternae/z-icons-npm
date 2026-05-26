import React from 'react';

export const LanStretcherSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M552 272c13.3 0 24 10.7 24 24s-10.7 24-24 24H436l-7.7 4.6-93.7 56.2 64.5 38.7c5.3-2 10.9-3.1 16.9-3.1 26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48q0-3.75.6-7.2L288 408.8l-80.6 48.4q.6 3.6.6 7.2c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48c5.9 0 11.6 1.1 16.8 3.1l64.5-38.7-93.7-56.2-7.7-4.6h-116c-13.3 0-24-10.7-24-24s10.7-24 24-24h528zm-264 80.8 54.7-32.8H233.4l54.7 32.8zM9.4 24.9C26.6-.8 61.3-7.7 87.1 9.4L241 112h279c30.9 0 56 25.1 56 56s-25.1 56-56 56H233.7c-17.4 0-34.4-5.1-48.8-14.8L25 102.6C-.8 85.4-7.7 50.7 9.4 24.9"})
);

export default LanStretcherSolid;
