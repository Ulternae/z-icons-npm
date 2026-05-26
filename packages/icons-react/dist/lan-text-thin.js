import React from 'react';

export const LanTextThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 72c0-13.3 10.7-24 24-24h144v416H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96V48h144c13.3 0 24 10.7 24 24v80c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanTextThin;
