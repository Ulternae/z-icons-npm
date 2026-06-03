import React from 'react';

export const LanUserShieldRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M48 480c0-70.7 57.3-128 128-128h64v-26.7c0-7.3 1-14.5 2.9-21.3H176C78.8 304 0 382.8 0 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24zm397.3 8.5-13.3 6.3V306.7l96 32v19.6c0 55.8-32.2 106.5-82.7 130.3zm-23.4-229-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4v31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2v-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"})
);

export default LanUserShieldRegular;
