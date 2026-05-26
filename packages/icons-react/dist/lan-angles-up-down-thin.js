import React from 'react';

export const LanAnglesUpDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M197.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-168 168c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 19.3l162.3 162.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-168-168zm168 339.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 492.7 29.7 330.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l168 168c3.1 3.1 8.2 3.1 11.3 0z"})
);

export default LanAnglesUpDownThin;
