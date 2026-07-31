import React from 'react';

export const LanFileCaretUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V186.5c0-12.7-5.1-24.9-14.1-33.9L231.4 30.1c-9-9-21.2-14.1-33.9-14.1zM0 64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184.5 163.3-70.1 77.1c-1.6 1.7-2.4 3.9-2.4 6.3 0 5.1 4.2 9.3 9.3 9.3h141.4c5.1 0 9.3-4.2 9.3-9.3 0-2.3-.9-4.5-2.4-6.3l-70.1-77.1c-1.9-2.1-4.6-3.3-7.5-3.3s-5.6 1.2-7.5 3.3M192 208c7.4 0 14.4 3.1 19.3 8.5l70.1 77.1c4.2 4.7 6.6 10.7 6.6 17 0 14-11.3 25.3-25.3 25.3H121.3c-14 0-25.3-11.3-25.3-25.3 0-6.3 2.3-12.4 6.6-17l70.1-77.1c4.9-5.4 12-8.5 19.3-8.5"})
);

export default LanFileCaretUpThin;
