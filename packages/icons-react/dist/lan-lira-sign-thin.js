import React from 'react';

export const LanLiraSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M169.2 32c-86 0-144 87.7-110.5 166.9L69.4 224H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h68.1c8.4 20.5 11.6 42.5 9.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h75.3c-3.2 15.1-9 29.7-17.4 43.2L1.2 467.8c-1.5 2.5-1.6 5.6-.2 8.1s4.1 4.1 7 4.1h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H22.4l57.2-92.4c9.9-16 16.7-33.6 20.1-51.6H264c4.4 0 8-3.6 8-8s-3.6-8-8-8H101.8c1.8-21.5-1-43.3-8.5-64H264c4.4 0 8-3.6 8-8s-3.6-8-8-8H86.8l-13.3-31.4C44.3 124 94.7 48 169.2 48h3.8c32 0 63.5 8.4 91.3 24.2l11.7 6.7c3.8 2.2 8.7.9 10.9-3s.9-8.7-3-10.9l-11.7-6.7C242 41.1 207.8 32 173 32z"})
);

export default LanLiraSignThin;
