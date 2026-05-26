import React from 'react';

export const LanFileShieldRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h169.5c8.6 17.2 19.3 33.3 31.8 48H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v23.1c-3.1.6-6.2 1.5-9.3 2.5L368 225.1v-17h-88c-39.8 0-72-32.2-72-72v-88zm140.1 112L256 67.9V136c0 13.3 10.7 24 24 24zm97.2 328.5C495.8 464.8 528 414 528 358.2v-19.6l-96-32v188.1l13.3-6.3zm-23.4-229c6.6-2.2 13.7-2.2 20.2 0l112 37.3c13.1 4.4 21.9 16.6 21.9 30.4v31.1c0 74.4-43 142.1-110.2 173.7l-18.5 8.7c-4.8 2.2-10 3.4-15.2 3.4s-10.5-1.2-15.2-3.4l-18.7-8.7C331 500.3 288 432.6 288 358.2v-31.1c0-13.8 8.8-26 21.9-30.4l112-37.3z"})
);

export default LanFileShieldRegular;
