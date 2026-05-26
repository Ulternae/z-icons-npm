import React from 'react';

export const LanOverlineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8zm360 304a176 176 0 1 0-352 0 176 176 0 1 0 352 0M0 320a192 192 0 1 1 384 0 192 192 0 1 1-384 0"})
);

export default LanOverlineThin;
