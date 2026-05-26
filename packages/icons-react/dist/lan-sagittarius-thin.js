import React from 'react';

export const LanSagittariusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M440 32c4.4 0 8 3.6 8 8v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3L203.3 288l82.3 82.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L192 299.3 13.7 477.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L180.7 288l-82.4-82.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l82.4 82.3L420.7 48H272c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanSagittariusThin;
