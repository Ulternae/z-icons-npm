import React from 'react';

export const LanHockeyStickRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.023 512.464 544.023',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M466.2-17c5-12.3 18.9-18.2 31.2-13.3s18.3 19 13.3 31.3L335 436.9c-18.3 45.4-62.4 75.1-111.3 75.1H88.5c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h241.9L466.3-17zM176.5 464h47.2c29.4 0 55.8-17.8 66.8-45.1L311 368H176.5zm-88-96c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h40v-96z"})
);

export default LanHockeyStickRegular;
