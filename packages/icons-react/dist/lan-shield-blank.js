import React from 'react';

export const LanShieldBlank = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M268.6 37.3c-8-3.4-17-3.4-25 0l-176.7 75c-11.3 4.8-18.9 15.5-18.8 27.6.5 94 39.3 259.8 195.4 334.5 7.9 3.8 17.2 3.8 25.1 0 156.1-74.7 195-240.4 195.5-334.5.1-12.1-7.5-22.8-18.8-27.6zM231.1 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.6 239.2 16.1 140c-.1-26.2 16.3-47.9 38.3-57.2z"})
);

export default LanShieldBlank;
