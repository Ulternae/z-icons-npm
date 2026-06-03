import React from 'react';

export const CoreKey = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.1 512.5 534.6',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352.5 0c88.4 0 160 71.6 160 160s-71.6 160-160 160c-32.6 0-63-9.8-88.2-26.5L189.8 368l41.4 41.4-45.2 45.2-41.4-41.4-34.8 34.7 41.4 41.4-45.2 45.2-86.6-86.6 199.8-199.8c-16.7-25.3-26.5-55.6-26.5-88.2 0-88.4 71.6-160 160-160zm0 64a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
);

export default CoreKey;
