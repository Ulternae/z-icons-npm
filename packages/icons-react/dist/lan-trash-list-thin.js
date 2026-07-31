import React from 'react';

export const LanTrashListThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M151.4 15.1C155 6 163.9 0 173.7 0h132.6c9.8 0 18.6 6 22.3 15.1L348.2 64H131.8zM114.6 64H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h400c4.4 0 8-3.6 8-8s-3.6-8-8-8h-74.6L343.5 9.1C337.4-6 322.7-16 306.3-16H173.7c-16.4 0-31.1 10-37.1 25.1zm-55 64 24 324.7c2.5 33.4 30.3 59.3 63.8 59.3h185.1c33.5 0 61.3-25.9 63.8-59.3L420.4 128h-16l-24 323.5c-1.9 25.1-22.7 44.5-47.9 44.5H147.4c-25.1 0-46-19.4-47.9-44.5L75.5 128h-16zm428.4 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 128c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8 136c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8"})
);

export default LanTrashListThin;
