import React from 'react';

export const LanSThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 143.5C0 81.9 49.9 32 111.5 32H296c4.4 0 8 3.6 8 8s-3.6 8-8 8H111.5C58.7 48 16 90.8 16 143.5c0 47 34.2 87 80.6 94.4l129.2 20.4c54.2 8.6 94.1 55.3 94.1 110.2 0 61.6-49.9 111.5-111.5 111.5H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h184.5c52.8 0 95.5-42.8 95.5-95.5 0-47-34.2-87-80.6-94.4L94.1 253.7C39.9 245.1 0 198.4 0 143.5"})
);

export default LanSThin;
