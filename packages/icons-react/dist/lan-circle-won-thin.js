import React from 'react';

export const LanCircleWonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c-3.6 0-6.8 2.4-7.7 5.9L220 256h-61.8l-30.5-98.4c-1.3-4.2-5.8-6.6-10-5.3s-6.6 5.8-5.3 10l29.1 93.6h-21.4c-4.4 0-8 3.6-8 8s3.6 8 8 8h26.4l38 122.4c1.1 3.4 4.2 5.7 7.8 5.6s6.7-2.5 7.6-5.9l32.6-122.1h47.4L312.4 394c.9 3.4 4 5.9 7.6 5.9s6.7-2.2 7.8-5.6l38-122.4h26.4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-21.4l29.1-93.6c1.3-4.2-1-8.7-5.3-10s-8.7 1-10 5.3L354.1 256h-61.8L264 149.9c-.9-3.5-4.1-5.9-7.7-5.9zm64.6 219.1L296.3 272h52.6zm-64.6-180 19.4 72.9h-38.9zM163.1 272h52.6l-24.3 91.1z"})
);

export default LanCircleWonThin;
