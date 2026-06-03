import React from 'react';

export const LanChessPawn = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192-32c61.9 0 112 50.1 112 112 0 31.3-12.9 59.7-33.7 80h9.7c8.8 0 16 7.2 16 16s-7.2 16-16 16h-3.4L304 384l56.2 70.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5h-281C31.9 512 16 496.1 16 476.5c0-8.1 2.7-15.9 7.8-22.2L80 384l27.4-192H104c-8.8 0-16-7.2-16-16s7.2-16 16-16h9.7C92.9 139.7 80 111.3 80 80c0-61.9 50.1-112 112-112m-83.8 432-3.2 4-56.2 70.3c-.5.6-.8 1.4-.8 2.2 0 2 1.6 3.5 3.5 3.5h280.9c1.5 0 2.7-.9 3.3-2.2l.3-1.4c0-.8-.3-1.6-.8-2.2L279 403.9l-3.2-4H108.2zm30.9-203.5L114.6 368h154.8l-24.5-171.5-.7-4.5H139.8zM192 0a80 80 0 1 0 0 160 80 80 0 1 0 0-160"})
);

export default LanChessPawn;
