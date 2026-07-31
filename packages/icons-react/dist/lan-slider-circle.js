import React from 'react';

export const LanSliderCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 256a96 96 0 1 0-192 0 96 96 0 1 0 192 0m31 16c-7.9 63.1-61.7 112-127 112-70.7 0-128-57.3-128-128s57.3-128 128-128c65.3 0 119.1 48.9 127 112h81c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-302.3-32c-.5 5.3-.7 10.6-.7 16s.2 10.7.7 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanSliderCircle;
