import React from 'react';

export const LanCloseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M381.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 13.7 66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 2.3 434.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3l178.3 178.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256z"})
);

export default LanCloseThin;
