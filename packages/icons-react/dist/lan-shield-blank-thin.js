import React from 'react';

export const LanShieldBlankThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M274.8 22.6c-12-5.1-25.5-5.1-37.5 0L60.6 97.5C44 104.6 32 120.7 32.1 139.9c.5 96.6 40.3 270.2 204.6 348.8 12.3 5.9 26.7 5.9 39 0 164.2-78.6 204-252.2 204.5-348.8.1-19.1-11.9-35.3-28.5-42.4L275 22.5zM231.1 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16.1 140c-.1-26.2 16.3-47.9 38.3-57.2z"})
);

export default LanShieldBlankThin;
