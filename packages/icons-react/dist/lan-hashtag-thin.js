import React from 'react';

export const LanHashtagThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M203.9.2c4.3.9 7.1 5.2 6.1 9.5L184.7 128h197.4L408.2 6.3c.9-4.3 5.2-7.1 9.5-6.1s7.1 5.2 6.1 9.5L398.5 128H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H395.1l-48 224h105.5c4.4 0 8 3.6 8 8s-3.6 8-8 8H343.7l-26.1 121.7c-.9 4.3-5.2 7.1-9.5 6.1s-7.1-5.2-6.1-9.5L327.4 384H130l-26.1 121.7c-.9 4.3-5.2 7.1-9.5 6.1s-7.1-5.2-6.1-9.5L113.5 384H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h109l48-224H59.5c-4.4 0-8-3.6-8-8s3.6-8 8-8h109L194.6 6.3c.9-4.3 5.2-7.1 9.5-6.1zM181.3 144l-48 224h197.4l48-224z"})
);

export default LanHashtagThin;
