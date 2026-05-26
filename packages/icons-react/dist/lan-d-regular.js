import React from 'react';

export const LanDRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h136c123.7 0 224 100.3 224 224S283.7 480 160 480H24c-13.3 0-24-10.7-24-24zm48 24v352h112c97.2 0 176-78.8 176-176S257.2 80 160 80z"})
);

export default LanDRegular;
