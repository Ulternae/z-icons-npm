import React from 'react';

export const CoreBackwardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M560 64h-76.4l-9.2 8.3-170.5 155V64h-76.4l-9.2 8.3-176 160C35.8 238.4 32 247 32 256s3.8 17.6 10.5 23.7l176 160 9.2 8.3h76.4V284.7l170.5 155 9.2 8.3h76.4V64z"})
);

export default CoreBackwardSolid;
