import React from 'react';

export const LanDThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h152c123.7 0 224 100.3 224 224S283.7 480 160 480H8c-4.4 0-8-3.6-8-8zm16 8v416h144c114.9 0 208-93.1 208-208S274.9 48 160 48z"})
);

export default LanDThin;
