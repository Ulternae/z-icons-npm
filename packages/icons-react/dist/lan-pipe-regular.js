import React from 'react';

export const LanPipeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 64 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24S8 501.3 8 488V24C8 10.7 18.7 0 32 0"})
);

export default LanPipeRegular;
