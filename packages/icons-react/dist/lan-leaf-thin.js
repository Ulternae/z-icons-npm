import React from 'react';

export const LanLeafThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M500 1.1c2.1-1.2 4.6-1.5 6.9-.6C510 1.7 512 4.7 512 8v200.4C512 340.7 404.5 448 272.2 448c-91.9 0-167.5-70.5-175.5-160.3C48 320.8 16 376.7 16 440v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32c0-72.4 38.5-135.8 96.1-170.9 1.5-92.8 74.8-168.2 166.9-172.9l9-.2c70.2 0 126.8-23.4 165.9-46.9 19.5-11.7 34.7-23.4 44.9-32.2 5.1-4.4 9-8 11.6-10.5 1.3-1.2 2.2-2.2 2.9-2.9.3-.3.5-.6.7-.8l.2-.2 1.9-1.5zm-6.8 28c-10.8 9.2-26.7 21.5-47.1 33.8-38.3 23-93 46.1-160.5 48.9l-13.7.3-8.2.2c-80.6 4.1-145.4 67.8-151.3 147.9 26.4-12.9 56.1-20.1 87.5-20.1h112c4.4 0 8 3.6 8 8s-3.6 8-8 8h-112c-31.8 0-61.7 8.1-87.8 22.3 3.3 85.4 73.8 153.7 160 153.7 123.5 0 223.8-100.1 223.8-223.6V26.7c-.9.8-1.8 1.6-2.8 2.5z"})
);

export default LanLeafThin;
