import React from 'react';

export const LanCircleWThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96.3-346.1c-1.2-4.3-5.6-6.8-9.8-5.6s-6.8 5.6-5.6 9.8l48 176c.9 3.4 4 5.8 7.6 5.9s6.7-2.2 7.8-5.6l48.4-152 48.4 152c1.1 3.4 4.2 5.6 7.8 5.6s6.6-2.5 7.6-5.9l48-176c1.2-4.3-1.4-8.7-5.6-9.8s-8.7 1.4-9.8 5.6l-40.9 149.9-47.8-150.2c-1.1-3.3-4.1-5.6-7.6-5.6s-6.6 2.3-7.6 5.6l-47.8 150.2-40.9-149.9z"})
);

export default LanCircleWThin;
