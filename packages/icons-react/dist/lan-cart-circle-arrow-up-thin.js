import React from 'react';

export const LanCartCircleArrowUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h45.7c11.4 0 21.3 8.1 23.5 19.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2h113.1c.4-5.4 1.1-10.7 2-16H191.6c-19.1 0-35.6-13.5-39.3-32.3l-9.4-47.7H340c4-5.6 8.3-10.9 12.9-16H139.8L96 48h431.7c15.5 0 26.9 14.4 23.4 29.5l-30.9 132c5.3.7 10.6 1.6 15.8 2.7l30.6-131.1C572.5 56 553.4 32 527.7 32H92.8C89 13.4 72.7 0 53.7 0zm168 464a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m112-64a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-213.7-2.3c3.1 3.1 8.2 3.1 11.3 0l50.4-50.4V472c0 4.4 3.6 8 8 8s8-3.6 8-8V347.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3z"})
);

export default LanCartCircleArrowUpThin;
