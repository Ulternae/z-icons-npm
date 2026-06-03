import React from 'react';

export const LanFileCircleInfoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h154.9c6.1 17.3 14.6 33.4 25.1 48H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v22.1c-16.7 1.4-32.8 4.9-48 10.3v-10.9h-88c-39.8 0-72-32.2-72-72v-88zm140.1 112L256 67.9V136c0 13.3 10.7 24 24 24zm83.9 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 100a20 20 0 1 0 0-40 20 20 0 1 0 0 40m-32 44c0 8.8 7.2 16 16 16v32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16v-48c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"})
);

export default LanFileCircleInfoRegular;
