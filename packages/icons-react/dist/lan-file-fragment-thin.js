import React from 'react';

export const LanFileFragmentThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 16h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V448c0 26.5-21.5 48-48 48h-96v16h96c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0H64C28.7 0 0 28.7 0 64v224h16V64c0-26.5 21.5-48 48-48m296 144h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1l122.5 122.5c2.3 2.3 4.3 4.8 6.1 7.4M32 352h112c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16M0 368v112c0 17.7 14.3 32 32 32h112c17.7 0 32-14.3 32-32V368c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"})
);

export default LanFileFragmentThin;
