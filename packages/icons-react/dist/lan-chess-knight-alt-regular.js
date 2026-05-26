import React from 'react';

export const LanChessKnightAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200.5 0c101.6 0 184 82.4 184 184v125c0 15.5-4.3 30.6-12.2 43.7l-3.6 5.5-28.4 39.3 38.1 57.1c4 6.1 6.2 13.2 6.2 20.4l-.2 3.8c-1.9 18.6-17.6 33.1-36.7 33.1H69.4l-3.8-.2C47 509.8 32.5 494.1 32.5 475c0-7.3 2.2-14.4 6.2-20.4l48-72.1-1.2-3.5c-10.1-30.4-2.1-63.9 20.6-86.5l35.5-35.2h-1.7l-11.2 6.9c-15.8 9.7-34.5 13.5-52.7 10.9l-7.8-1.5C33 264.8 8.4 232.9 8.4 196.8c0-19.1 6.9-37.8 19.6-52.3l68.4-78.3V23.9l.1-2.4c1.3-12 11.6-21.5 24-21.5zM90.2 464h236.6l-32-48H122.2zm54.3-388.7c0 5.8-2.1 11.4-5.9 15.8l-74.4 85.1c-5 5.7-7.8 13.1-7.8 20.8 0 14.3 9.8 26.8 23.4 30.2l3 .6c7.1 1 14.5-.5 20.7-4.3l17-10.5 2.9-1.5c3-1.3 6.3-2 9.7-2h66.8c9.7 0 18.5 5.9 22.2 14.9s1.6 19.3-5.3 26.2l-77 76.3c-9.8 9.7-13.2 24.1-8.9 37.2l1.4 4.1h170l27.2-37.8 2.9-4.8c2.5-5 3.9-10.6 3.9-16.3v-125c0-75.1-60.9-136-136-136h-56v27.3zm40 68.7a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanChessKnightAltRegular;
