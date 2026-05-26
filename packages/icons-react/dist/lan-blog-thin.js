import React from 'react';

export const LanBlogThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 8c0-4.4 3.6-8 8-8 154.6 0 280 125.4 280 280 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-145.8-118.2-264-264-264-4.4 0-8-3.6-8-8M40 96c4.4 0 8 3.6 8 8v264c0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c79.5 0 144 64.5 144 144s-64.5 144-144 144S32 447.5 32 368V104c0-4.4 3.6-8 8-8m192 0c101.6 0 184 82.4 184 184 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-92.8-75.2-168-168-168-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanBlogThin;
