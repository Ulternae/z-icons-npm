import React from 'react';

export const LanWThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M5.4 32.5c4.2-1.5 8.7.7 10.2 4.9L159.4 446 280.3 37.7c1-3.4 4.1-5.7 7.7-5.7s6.7 2.3 7.7 5.7l121 408.3L560.5 37.3c1.5-4.2 6-6.4 10.2-4.9s6.4 6 4.9 10.2l-152 432c-1.2 3.3-4.3 5.4-7.7 5.3s-6.5-2.4-7.5-5.7L288 68.2 167.7 474.3c-1 3.3-4 5.6-7.5 5.7s-6.6-2.1-7.7-5.3L.5 42.7c-1.5-4.2.7-8.7 4.9-10.2"})
);

export default LanWThin;
