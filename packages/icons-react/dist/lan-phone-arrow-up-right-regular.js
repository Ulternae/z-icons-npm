import React from 'react';

export const LanPhoneArrowUpRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M327 151c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l103-103V136c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H376c-13.3 0-24 10.7-24 24s10.7 24 24 24h54.1l-103 103zM181.6 40.9c-11.9-26.2-41.6-39.1-68.9-30C50.4 31.7-3.5 94.6 10.1 171.8 40.7 345.5 166.6 471.4 340.3 502c77.2 13.6 140.1-40.4 160.9-102.6 9.1-27.3-3.9-57-30-68.9l-87.3-39.7c-23.4-10.6-51-4-67.1 16l-21.2 26.6c-48.9-27.3-88.9-68.8-114.4-118.8l24.2-19.3c20.1-16.1 26.7-43.7 16-67.1zm-53.7 15.5c4-1.3 8.3.6 10 4.4l39.7 87.2c1.5 3.4.6 7.4-2.3 9.7l-38.9 31.1c-8.4 6.8-11.3 18.3-7 28.2 31.9 73.9 89.9 133.8 162.4 168.2 10.1 4.8 22.1 2 29-6.7l33.5-41.9c2.3-2.9 6.3-3.9 9.7-2.3l87.3 39.7c3.8 1.7 5.7 6 4.4 10-15.1 45.3-58.6 79.1-107 70.5C194.9 427.4 84.6 317.1 57.5 163.2 49 114.8 82.8 71.3 128 56.2z"})
);

export default LanPhoneArrowUpRightRegular;
