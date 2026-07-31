import React from 'react';

export const LanPaperPlaneAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M142 264h416.5c-2 4.9-5.9 9-10.9 11.3l-485 219.8c-1.3.6-2.8.9-4.3.9-5.5 0-10.3-4.7-10.3-10.5q0-2.25.9-4.2zm416.5-16H142L48.9 30.7q-.9-1.95-.9-4.2C48 20.6 52.8 16 58.3 16c1.5 0 2.9.3 4.3.9l485 219.7c5 2.3 8.9 6.4 10.9 11.3zM34.1 37 128 256 34.1 475c-1.4 3.3-2.1 6.9-2.1 10.5C32 500 43.8 512 58.3 512c3.7 0 7.4-.8 10.9-2.3l485-219.8c13.3-6 21.9-19.3 21.9-33.9s-8.6-27.9-21.9-33.9L69.2 2.3C65.8.8 62.1 0 58.3 0 43.8 0 32 12 32 26.5c0 3.6.7 7.2 2.1 10.5"})
);

export default LanPaperPlaneAltThin;
