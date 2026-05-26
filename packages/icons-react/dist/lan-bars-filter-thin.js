import React from 'react';

export const LanBarsFilterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 56c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m96 200c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8m224 184c0 4.4-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c4.4 0 8 3.6 8 8"})
);

export default LanBarsFilterThin;
