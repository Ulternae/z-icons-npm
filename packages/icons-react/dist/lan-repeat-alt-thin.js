import React from 'react';

export const LanRepeatAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.925 512 543.85',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M477.7 101.7c3.1-3.1 3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L452.7 88H192C86 88 0 174 0 280c0 4.4 3.6 8 8 8s8-3.6 8-8c0-97.2 78.8-176 176-176h260.7l-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104zM34.3 410.3c-3.1 3.1-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L59.3 424H320c106 0 192-86 192-192 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 97.2-78.8 176-176 176H59.3l90.3-90.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-104 104z"})
);

export default LanRepeatAltThin;
