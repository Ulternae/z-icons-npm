import React from 'react';

export const LanKeyboardBrightnessThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M101.7 178.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3zM312 240c0 4.4 3.6 8 8 8s8-3.6 8-8V96c0-4.4-3.6-8-8-8s-8 3.6-8 8zm122.3 42.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM0 408c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m200-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zm320 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanKeyboardBrightnessThin;
