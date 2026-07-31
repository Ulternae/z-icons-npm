import React from 'react';

export const LanArrowRotateLeft10Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-103 0-191.8-60.8-232.4-148.5-1.9-4-.1-8.8 3.9-10.6s8.8-.1 10.6 3.9C76.2 439 159.5 496 256 496c132.5 0 240-107.5 240-240S388.5 16 256 16c-64.5 0-126.3 25.6-171.9 71.2l-70.4 70.5c-2.3 2.3-5.7 3-8.7 1.8s-5-4.3-5-7.5V8c0-4.4 3.6-8 8-8s8 3.6 8 8v124.7l56.8-56.8C121.4 27.3 187.3 0 256 0m-75.6 160.8c2.5-1.2 5.4-1.1 7.8.3s3.8 4 3.8 6.8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V180.8L139.6 199c-3.9 2-8.7.4-10.7-3.6s-.4-8.7 3.6-10.7l48-24zM312 160c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56zm-16 16c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40z"})
);

export default LanArrowRotateLeft10Thin;
