import React from 'react';

export const LanBoxArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M335.1 16c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.7 10.8 11.9 23.9 11.9 37.2V416l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V148.5c0-11.7 3.2-23.1 9.2-33l2.7-4.2 48.9-68.5c10.5-14.7 26.7-24.2 44.4-26.3l7.7-.5H335zM48 416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V176H48zm160.8-202.6c9.4-7.7 23.3-7.1 32.1 1.7l64 64 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7L271 313l-23-23v86.1c0 13.3-10.7 24-24 24s-24-10.7-24-24V290l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l64-64 1.8-1.7zM112.9 64c-5.2 0-10 2.5-13 6.7L59 128h141V64zM248 128h141l-40.9-57.3c-3-4.2-7.9-6.7-13-6.7H248z"})
);

export default LanBoxArrowUpRegular;
