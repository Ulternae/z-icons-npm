import React from 'react';

export const LanArrowRotateLeft10 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-98.3 0-183.6-55.4-226.5-136.5-4.1-7.8-1.1-17.5 6.7-21.6s17.5-1.1 21.6 6.7C95.4 431.6 170.1 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-62 0-121.2 25.5-163.8 70.6L27.6 171c-4.5 4.8-11.4 6.3-17.5 3.9S0 166.6 0 160V16C0 7.2 7.2 0 16 0s16 7.2 16 16v103.8l37-39.1C117.6 29.2 185.2 0 256 0m-71.2 161.7c5-2.5 10.8-2.2 15.6.7s7.6 8.1 7.6 13.6v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V201.9l-24.8 12.4c-7.9 4-17.5.7-21.5-7.2s-.7-17.5 7.2-21.5l48-24zM312 160c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56zm-16 32c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"})
);

export default LanArrowRotateLeft10;
