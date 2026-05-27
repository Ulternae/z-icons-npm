import React from 'react';

export const CoreLanguageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32V0h-64v64H0v64h242.3l-.5 1.2c-14.7 40.3-37.1 76.9-65.7 107.8-25.8-21.9-48.6-47.5-67.7-76.1l-1.8-2.7-53.3 35.5 1.8 2.7c20.7 31.1 45.2 59 72.6 83.4-13.7 9.8-28.2 18.6-43.5 26.3-24 12-45.1 22.5-63.2 31.6l28.6 57.2c18.1-9 39.2-19.6 63.2-31.6 24.2-12.1 47-26.7 67.8-43.3 37.5 24.2 78.8 42.5 122.4 54.2-28.3 66.1-44.7 104.3-49.1 114.6l58.9 25.2c7.9-18.4 17.3-40.4 28.3-66h149.8c11 25.6 20.4 47.6 28.3 66l58.8-25.2-12.6-29.4-120-280c-5-11.8-16.6-19.4-29.4-19.4s-24.4 7.6-29.4 19.4l-58 135.2c-35.4-8.5-69-22.1-100-40.2 31.7-35.8 56.7-77.5 73.3-123.3l8.4-23.1h41.6V64h-160V32z"})
);

export default CoreLanguageSolid;
