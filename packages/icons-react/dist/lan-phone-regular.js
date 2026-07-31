import React from 'react';

export const LanPhoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112.8 10.9c27.3-9.1 57 3.9 68.9 30l39.7 87.3c10.6 23.4 4 51-16 67.1l-24.2 19.3c25.5 50 65.5 91.4 114.4 118.8l21.2-26.6c16.1-20.1 43.7-26.7 67.1-16l87.3 39.7c26.2 11.9 39.1 41.6 30 68.9-20.7 62.3-83.7 116.2-160.9 102.6C166.6 471.4 40.7 345.5 10.1 171.8-3.5 94.6 50.5 31.7 112.7 10.9zM138 60.8c-1.7-3.8-6-5.7-10-4.4-45.2 15.1-79.1 58.6-70.5 107 27.1 153.8 137.4 264.2 291.2 291.3 48.4 8.5 91.9-25.3 107-70.5 1.3-4-.6-8.3-4.4-10L364 334.4c-3.4-1.5-7.4-.6-9.7 2.3l-33.5 41.9c-7 8.7-19 11.5-29 6.7-72.5-34.4-130.5-94.3-162.4-168.2-4.3-9.9-1.4-21.5 7-28.2l38.9-31.1c2.9-2.3 3.9-6.3 2.3-9.7l-39.7-87.4z"})
);

export default LanPhoneRegular;
