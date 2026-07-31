import React from 'react';

export const LanArrowAltSquareRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm-16-64c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-28.7 235.3-104 104c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-72H120c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h104v-72c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l104 104c6.2 6.2 6.2 16.4 0 22.6"})
);

export default LanArrowAltSquareRightRegular;
