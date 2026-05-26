import React from 'react';

export const LanBookmarkPlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 0C25.1 0 0 25.1 0 56v442.3c0 12.3 13.2 20 23.9 13.9l164.2-92.8c2.4-1.4 5.4-1.4 7.9 0l164.2 92.8c10.7 6 23.9-1.7 23.9-13.9L384 56c0-30.9-25.1-56-56-56zM16 56c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40v442.3l-164.2-92.8c-7.3-4.1-16.3-4.1-23.6 0L16 498.3zm176 64c-4.4 0-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-72c0-4.4-3.6-8-8-8"})
);

export default LanBookmarkPlusThin;
