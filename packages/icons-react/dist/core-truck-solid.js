import React from 'react';

export const CoreTruckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v32h32c88.4 0 160 71.6 160 160v160h-65.2c-7.8 54.3-54.4 96-110.8 96s-103.1-41.7-110.8-96h-66.3c-7.8 54.3-54.4 96-110.8 96S72.9 502.3 65.2 448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM176 384a48 48 0 1 0 0 96 48 48 0 1 0 0-96m288 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-16-96h128c0-53-43-96-96-96h-32z"})
);

export default CoreTruckSolid;
