import React from 'react';

export const LanFlorinSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M323 32c-29.3 0-55.6 17.7-66.7 44.8L189.9 240H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h143.4l-70.5 173.1C104.2 450.2 83.7 464 61 464H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h53c29.3 0 55.6-17.7 66.7-44.8l73-179.2h143.4c4.4 0 8-3.6 8-8s-3.6-8-8-8H207.3l64-157.1c8.5-21.1 29-34.9 51.7-34.9h53c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanFlorinSignThin;
