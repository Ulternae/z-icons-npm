import React from 'react';

export const LanCircleUserCircleExclamationThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 320h1.4c-2.4 5.2-4.6 10.5-6.5 16H256c-61.9 0-112 50.1-112 112 40.1 30.1 90 48 144 48 13.6 0 26.9-1.1 39.8-3.3 2.8 5 5.8 9.9 9 14.6-15.8 3-32.1 4.6-48.8 4.6-141.4 0-256-114.6-256-256S146.6 0 288 0c126.8 0 232.1 92.2 252.4 213.2-5.5-1.3-11.1-2.4-16.8-3.2C502.1 99.5 404.8 16 288 16 155.5 16 48 123.5 48 256c0 71.4 31.2 135.5 80.6 179.4C134.9 370.6 189.5 320 256 320zM208 192a80 80 0 1 1 160 0 80 80 0 1 1-160 0m80 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m336 144a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24m0-140c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8"})
);

export default LanCircleUserCircleExclamationThin;
