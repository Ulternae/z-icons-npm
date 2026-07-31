import React from 'react';

export const LanCodeSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-184 184c-3.1 3.1-3.1 8.2 0 11.3l184 184c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L19.3 256zm180.7 0L556.7 256 378.3 434.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l184-184c3.1-3.1 3.1-8.2 0-11.3l-184-184c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
);

export default LanCodeSimpleThin;
