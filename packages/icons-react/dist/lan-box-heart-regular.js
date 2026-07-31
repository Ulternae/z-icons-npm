import React from 'react';

export const LanBoxHeartRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 176v240c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V176zm200-48h141l-40.9-57.3c-3-4.2-7.9-6.7-13-6.7H248zm-48-64h-87.1c-5.2 0-10 2.5-13 6.7L59 128h141zM0 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16H335c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm214.9 90.4 9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9h2.9c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48h2.9c13.5 0 26.5 5.4 36 14.9"})
);

export default LanBoxHeartRegular;
