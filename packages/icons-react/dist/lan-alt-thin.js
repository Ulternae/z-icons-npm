import React from 'react';

export const LanAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M463.8 94.5c7.6-9.2 18.9-14.5 30.8-14.5H632c4.4 0 8-3.6 8-8s-3.6-8-8-8H494.6c-16.7 0-32.5 7.5-43.2 20.3L176.2 417.5c-7.6 9.2-18.9 14.5-30.8 14.5H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h137.4c16.7 0 32.5-7.5 43.2-20.3zM424 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanAltThin;
