import React from 'react';

export const CoreTrainSubwaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 557.3',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352.3 0c70.7 0 128 57.3 128 128v224c0 40.1-18.5 75.9-47.4 99.4l60.6 60.6-45.2 45.3-78.5-78.5c-5.7.8-11.6 1.3-17.5 1.3h-192l-6.6-.2c-3.7-.2-7.4-.6-11-1.1l-78.5 78.5L19 512l60.6-60.6c-27.3-22.2-45.3-55.4-47.2-92.8l-.2-6.6V128c0-70.7 57.3-128 128-128h192zm-208 296a40 40 0 1 0 0 80 40 40 0 1 0 0-80m224 0a40 40 0 1 0 0 80 40 40 0 1 0 0-80M160.2 64c-35.3 0-64 28.7-64 64v96h132V64zm124 160h132v-96c0-35.3-28.7-64-64-64h-68z"})
);

export default CoreTrainSubwaySolid;
