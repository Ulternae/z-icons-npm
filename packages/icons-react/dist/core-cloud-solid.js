import React from 'react';

export const CoreCloudSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 32c82.7 0 151.9 57 170.8 133.8C526.4 184.5 576 246.4 576 320c0 88.4-71.6 160-160 160H160C71.6 480 0 408.4 0 320c0-8.6.7-17 2-25.2.7-4.2 1.5-8.3 2.5-12.3 13.5-56.2 56.7-100.8 112-116.4 13.8-3.9 28.4-6 43.5-6 40.6 0 77.7 15.1 105.8 40 10.6-12 21.2-24 31.7-36-36.6-32.3-84.9-52-137.6-52-6.8 0-13.5.3-20.2 1 31.3-48.7 86-81 148.2-81z"})
);

export default CoreCloudSolid;
