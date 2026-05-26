import React from 'react';

export const LanCompressWideThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 72c0-4.4 3.6-8 8-8s8 3.6 8 8v144c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h136zm8 216c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V304H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM368 72v136h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m-8 216h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H368v136c0 4.4-3.6 8-8 8s-8-3.6-8-8V296c0-4.4 3.6-8 8-8"})
);

export default LanCompressWideThin;
