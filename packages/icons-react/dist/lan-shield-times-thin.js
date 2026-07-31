import React from 'react';

export const LanShieldTimesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M237.3 22.6c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4-.5 96.6-40.3 270.2-204.5 348.8-12.3 5.9-26.7 5.9-39 0C72.3 410.2 32.4 236.6 31.9 140c-.1-19.1 11.9-35.3 28.5-42.4l176.7-75zm43.8-14.8c-16-6.8-34-6.8-50 0l-176.8 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zm-90.2 286c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l53.8-53.8 53.8 53.8c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.3 240l53.8-53.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 228.7l-53.8-53.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l53.8 53.8z"})
);

export default LanShieldTimesThin;
