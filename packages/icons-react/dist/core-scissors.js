import React from 'react';

export const CoreScissors = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 0c61.9 0 112 50.1 112 112 0 17.5-4 34.1-11.2 48.9l68.2 53.9L444.3 86.9l25.2-19.8 39.5 50.4-25.2 19.8-271.5 212.8c7.5 15.1 11.8 32 11.8 50 0 61.9-50.1 112-112 112S0 461.9 0 400s50.1-112 112-112c20.5 0 39.7 5.5 56.2 15.2l61-47.8-59.8-47.2C152.6 218.2 133 224 112 224 50.1 224 0 173.9 0 112S50.1 0 112 0m0 352a48 48 0 1 0 0 96 48 48 0 1 0 0-96m371.8 22.9 25.1 19.8-39.7 50.2-25.1-19.8-111-87.6 51.7-40.8zM112 64a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default CoreScissors;
