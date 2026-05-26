import React from 'react';

export const LanBicep = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 0c30.9 0 56 25.1 56 56v48c0 48.6-39.4 88-88 88h-22.9l7.5 79.8c42.9-30.1 95.1-47.8 151.5-47.8 64.9 0 124.4 23.4 170.3 62.3 6.7 5.7 7.6 15.8 1.9 22.6-5.7 6.7-15.8 7.6-22.5 1.9-40.4-34.2-92.6-54.7-149.7-54.7-56.2 0-107.8 20-147.9 53.3l3.9 41.2c.8 8.8-5.6 16.6-14.4 17.4s-16.6-5.6-17.4-14.4L137.7 115c-1.8-18.8 13-35 31.8-35H192c8.8 0 16 7.2 16 16s-7.2 16-16 16h-22.4l4.5 48H200c30.9 0 56-25.1 56-56V56c0-13.3-10.7-24-24-24H119c-25.3 0-46.8 16.9-51.9 40.8C53 138.8 32 258 32 384c0 52.8 42.7 95.7 95.5 96l367.2-31.9c8.8-.8 16.5 5.8 17.3 14.6s-5.8 16.5-14.6 17.3l-368 32-.7.1h-.7C57.3 512 0 454.7 0 384 0 254.9 21.4 133.2 35.8 66.1 44.2 26.6 79.4 0 119 0z"})
);

export default LanBicep;
