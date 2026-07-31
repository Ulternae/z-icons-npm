import React from 'react';

export const LanHardOfHearing = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m507.3 27.3-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m-320 320-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M240 96c-79.5 0-144 64.5-144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176s176 78.8 176 176c0 51.3-21.9 97.4-56.9 129.6-4.8 4.4-7.1 9.7-7.1 14.4 0 70.7-57.3 128-128 128h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c53 0 96-43 96-96 0-15.4 7.4-28.7 17.5-38 28.6-26.3 46.5-64.1 46.5-106 0-79.5-64.5-144-144-144m0 64c-44.2 0-80 35.8-80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112s112 50.1 112 112c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2-35.8-80-80-80"})
);

export default LanHardOfHearing;
