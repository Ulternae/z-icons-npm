import React from 'react';

export const LanMugHotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152-16c13.3 0 24 10.7 24 24 0 16.1 7.5 23.7 23.8 37.9l1.1 1C216.6 60.6 240 81.1 240 120c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C151.4 67.4 128 46.9 128 8c0-13.3 10.7-24 24-24m-40 432c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V240H112zm336-176v144h8c39.8 0 72-32.2 72-72s-32.2-72-72-72zm-1.3 192c-7.6 45.4-47.1 80-94.7 80H160c-53 0-96-43-96-96V224c0-17.7 14.3-32 32-32h360c66.3 0 120 53.7 120 120s-53.7 120-120 120zM288 8c0 16.1 7.5 23.7 23.8 37.9l1.1 1C328.6 60.6 352 81.1 352 120c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C263.4 67.4 240 46.9 240 8c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanMugHotRegular;
