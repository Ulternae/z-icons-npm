import React from 'react';

export const LanChartMixedUpCircleCurrencyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M408 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h52.5L320.2 168.3 207.8 70c-8.2-7.1-20.1-7.9-29.1-1.9L10.7 180c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7L190 118.2l114.2 99.9c9 7.9 22.4 7.9 31.4.2L496 80.8V136c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zM192 224c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24V248c0-13.3-10.7-24-24-24M56 320c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24m376 224a144 144 0 1 0 0-288 144 144 0 1 0 0 288m55.1-176.5c5.6 9.5 8.9 20.6 8.9 32.5s-3.2 23-8.9 32.5l20.2 20.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-20.2-20.2c-9.5 5.6-20.6 8.9-32.5 8.9s-23-3.2-32.5-8.9l-20.2 20.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l20.2-20.2c-5.6-9.5-8.9-20.6-8.9-32.5s3.2-23 8.9-32.5l-20.2-20.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l20.2 20.2c9.5-5.6 20.6-8.9 32.5-8.9s23 3.2 32.5 8.9l20.2-20.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM464 400a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanChartMixedUpCircleCurrencyRegular;
