import React from 'react';

export const LanSpadeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M49.3 208.8 231.9 26.2c6.5-6.5 15.4-10.2 24.6-10.2s18.1 3.7 24.6 10.2l182.6 182.6c43.7 43.7 43.7 114.7 0 158.4s-114.7 43.7-158.4 0l-31.8-31.8c-9.4-9.4-24.6-9.4-33.9 0l-31.8 31.8c-43.8 43.7-114.8 43.7-158.5 0s-43.7-114.7 0-158.4M256.5 0c-13.5 0-26.4 5.3-35.9 14.9L38 197.5c-50 50-50 131 0 181s131 50 181 0l29.5-29.5v147h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V349l29.5 29.5c50 50 131 50 181 0s50-131 0-181L292.4 14.9C282.9 5.3 270 0 256.5 0"})
);

export default LanSpadeThin;
