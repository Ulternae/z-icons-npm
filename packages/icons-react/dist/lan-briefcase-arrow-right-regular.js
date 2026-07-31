import React from 'react';

export const LanBriefcaseArrowRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M200 48h112c4.4 0 8 3.6 8 8v40H192V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-80V56c0-30.9-25.1-56-56-56H200c-30.9 0-56 25.1-56 56m24 88h280c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm113 233 72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H176c-13.3 0-24 10.7-24 24s10.7 24 24 24h102.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanBriefcaseArrowRightRegular;
