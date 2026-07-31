import React from 'react';

export const LanTextSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-286.1-286L342.1 48h173.4c5.2 0 9 4.9 7.8 9.9l-11 44.1c-1.1 4.3 1.5 8.6 5.8 9.7s8.6-1.5 9.7-5.8l11-44.1c3.8-15.1-7.7-29.8-23.3-29.8h-367c-11 0-20.6 7.5-23.3 18.2l-6.3 25.3zM132.1 88.7l8.7-34.6c.9-3.6 4.1-6.1 7.8-6.1h177l-50.9 183.2L132.2 88.7zM209.9 464H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-85.5l41.4-148.9-13-13z"})
);

export default LanTextSlashThin;
