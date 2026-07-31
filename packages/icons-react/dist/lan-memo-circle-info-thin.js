import React from 'react';

export const LanMemoCircleInfoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16h256c26.5 0 48 21.5 48 48v146.7c5.3-.9 10.6-1.6 16-2V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h180c-3.7-5.1-7.2-10.5-10.3-16H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m32 120c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m176 72a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-76a12 12 0 1 0 0 24 12 12 0 1 0 0-24m-24 148c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8v-80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8s3.6 8 8 8h8v72h-8c-4.4 0-8 3.6-8 8"})
);

export default LanMemoCircleInfoThin;
