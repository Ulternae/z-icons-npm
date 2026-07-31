import React from 'react';

export const LanGreaterThanEqualThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M5.3 47.6C1.2 46.1-1 41.5.5 37.3s6-6.4 10.2-4.9l432 152c3.2 1.1 5.3 4.2 5.3 7.5s-2.1 6.4-5.3 7.5l-432 152c-4.2 1.5-8.7-.7-10.2-4.9s.7-8.7 4.9-10.2L415.9 192zM440 464c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanGreaterThanEqualThin;
