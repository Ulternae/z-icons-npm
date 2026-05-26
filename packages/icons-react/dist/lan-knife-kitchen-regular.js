import React from 'react';

export const LanKnifeKitchenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M488.4 0c-9.4 0-18.3 3.7-25 10.3L285 188.7l11.3 11.3 104.3 104.3 31-17.3c15.2-8.5 24.7-24.5 24.7-42v-31.9c0-4.2 1.7-8.3 4.7-11.3l97-97c6.6-6.6 10.3-15.6 10.3-25S564.7 61.7 558 55l-44.6-44.7C506.7 3.7 497.8 0 488.4 0m-56 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0M5.1 468.7c-8.4 8.4-4.7 22.9 6.5 26.6 32.2 10.5 67 16.8 100.8 16.8 123.3 0 209.4-62.8 287.3-140.7 6.2-6.2 6.2-16.4 0-22.6l-23-23-33.9 33.9C275.5 422.3 206 464.1 112.4 464.1c-10.7 0-21.6-.8-32.6-2.2l182.6-182.6 33.9-33.9-33.9-33.9-33.9 33.9L5.1 468.8z"})
);

export default LanKnifeKitchenRegular;
