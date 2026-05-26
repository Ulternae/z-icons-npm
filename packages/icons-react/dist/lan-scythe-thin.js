import React from 'react';

export const LanScytheThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M42.6 172.1 21.9 208h489.5l46.5-192h-245C201.3 16 98.3 75.5 42.6 172.1M492 288l15.5-64H8c-2.9 0-5.5-1.5-6.9-4s-1.4-5.5 0-8l27.6-47.9C87.3 62.6 195.6 0 312.8 0H568c2.5 0 4.8 1.1 6.3 3.1s2.1 4.4 1.5 6.8l-120 496c-1 4.3-5.4 6.9-9.7 5.9s-6.9-5.4-5.9-9.7l48-198.1H328c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanScytheThin;
