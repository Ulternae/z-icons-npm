import React from 'react';

export const LanPodiumThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-39.2 16c3.7-18.3 19.8-32 39.2-32h80c22.1 0 40 17.9 40 40s-17.9 40-40 40h-80c-19.4 0-35.5-13.7-39.2-32H136c-30.9 0-56 25.1-56 56v56h296c4.4 0 8 3.6 8 8s-3.6 8-8 8h-10.8l-24.1 277.5c-2.9 33.1-30.6 58.5-63.8 58.5H106.7c-33.2 0-60.9-25.4-63.8-58.5L18.8 176H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-39.8 32.2-72 72-72zm204.4 144H34.9l24 276.2C61 477 81.8 496 106.7 496h170.6c24.9 0 45.7-19 47.8-43.8l24-276.2z"})
);

export default LanPodiumThin;
