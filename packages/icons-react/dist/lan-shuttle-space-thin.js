import React from 'react';

export const LanShuttleSpaceThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M213.2 448.1 373.3 352H392c60.5 0 128.5-31.4 170.4-76.8 10-10.9 10-27.6 0-38.5-41.8-45.4-109.9-76.8-170.4-76.8h-18.7L213.2 63.8C178.4 43 138.6 32 98 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h50c40.6 0 80.4-11 115.2-31.9M16 384h80v80H48c-17.7 0-32-14.3-32-32zm189 50.4c-28.3 17-60.2 26.9-93 29.2v-79.5h8c25 0 47-12.7 59.9-32h162.4L205 434.5zM16 368V264h136c4.4 0 8-3.6 8-8s-3.6-8-8-8H16V144h104c20.7 0 38.8 11.2 48.5 28 1.4 2.5 4.1 4 6.9 4H392c55.7 0 119.6 29.3 158.6 71.6 4.4 4.8 4.4 12 0 16.8-39 42.3-102.9 71.6-158.6 71.6H175.4c-2.9 0-5.5 1.5-6.9 4-9.7 16.8-27.8 28-48.5 28zm0-240V80c0-17.7 14.3-32 32-32h48v80zm104 0h-8V48.5c32.8 2.2 64.7 12.2 93 29.2l137.3 82.4H179.9C167 140.7 145 128 120 128m320 88c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-64c0-4.4-3.6-8-8-8"})
);

export default LanShuttleSpaceThin;
