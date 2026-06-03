import React from 'react';

export const LanChartPieSimpleCircleCurrencySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M541.9 208.1c-14.2-107-99-191.7-206-206C318.4-.2 304 14.3 304 32v176c0 17.7 14.3 32 32 32h53.8c30.4-20.2 66.9-32 106.2-32 15.9 0 31.3 1.9 46.1 5.6.1-1.8.1-3.6-.2-5.5M272 512c21.6 0 42.5-2.9 62.4-8.2C315.1 473.9 304 438.2 304 400c0-41.8 13.4-80.5 36-112h-60c-13.3 0-24-10.7-24-24V66.7c0-18.5-15.7-33.3-33.8-29.5C113.5 60.1 32 156.5 32 272c0 132.5 107.5 240 240 240m368-112a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-68.7-52.7-20.2 20.2c5.6 9.5 8.9 20.6 8.9 32.5s-3.2 23-8.9 32.5l20.2 20.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-20.2-20.2c-9.5 5.6-20.6 8.9-32.5 8.9s-23-3.2-32.5-8.9l-20.2 20.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l20.2-20.2c-5.6-9.5-8.9-20.6-8.9-32.5s3.2-23 8.9-32.5l-20.2-20.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l20.2 20.2c9.5-5.6 20.6-8.9 32.5-8.9s23 3.2 32.5 8.9l20.2-20.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M496 432a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanChartPieSimpleCircleCurrencySolid;
