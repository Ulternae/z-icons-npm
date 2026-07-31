import React from 'react';

export const LanChessPawnThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192-32c61.9 0 112 50.1 112 112 0 31.4-12.9 59.7-33.7 80h9.7c4.4 0 8 3.6 8 8s-3.6 8-8 8h-5.7L304 384l56.2 70.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5h-281C31.9 512 16 496.1 16 476.5c0-8.1 2.7-15.9 7.8-22.2L80 384l29.7-208H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h9.7C92.9 139.7 80 111.4 80 80c0-61.9 50.1-112 112-112M94.1 392l-1.6 2-56.2 70.3c-2.8 3.5-4.3 7.8-4.3 12.2 0 10.8 8.7 19.5 19.5 19.5h280.9c9.4 0 17.3-6.7 19.1-15.6l.4-3.9c0-3.3-.8-6.6-2.4-9.4l-1.8-2.7-56.2-70.3-1.6-2H94.1zm3.2-16h189.4l-28.6-200H125.9zM192-16c-53 0-96 43-96 96 0 33.4 17.2 62.8 43.1 80h105.8c25.9-17.2 43.1-46.6 43.1-80 0-53-43-96-96-96"})
);

export default LanChessPawnThin;
