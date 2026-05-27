import React from 'react';

export const CoreSnowflake = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 32V0h-64v88.4l-64-64L120.4 64 224 167.6V224h-56.4L64 120.4 24.4 160l64 64H0v64h88.4l-64 64L64 391.6 167.6 288H224v56.4L120.4 448l39.6 39.6 64-64V512h64v-88.4l64 64 39.6-39.6L288 344.4V288h56.4L448 391.6l39.6-39.6-64-64H512v-64h-88.4l64-64-39.6-39.6L344.4 224H288v-56.4L391.6 64 352 24.4l-64 64z"})
);

export default CoreSnowflake;
