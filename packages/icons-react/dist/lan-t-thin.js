import React from 'react';

export const LanTThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h176v424c0 4.4 3.6 8 8 8s8-3.6 8-8V48h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanTThin;
