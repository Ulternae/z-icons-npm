import React from 'react';

export const LanStomachRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 66.3 53.7 120 120 120h9c-.7 5.2-1 10.6-1 16v64c0 39.8-32.2 72-72 72h-64C53.7 360 0 413.7 0 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-35.3 28.7-64 64-64 9.6 0 19 3.5 30.6 11.1 8.8 5.7 17.1 12.6 26.9 20.7 4.2 3.4 8.6 7.1 13.5 11 31.6 25.2 72.9 53.3 137 53.3 106 0 192-86 192-192v-96c0-70.7-57.3-128-128-128-47.4 0-88.7 25.7-110.9 64L248 160c-39.8 0-72-32.2-72-72zm128 200c0-44.2 35.8-80 80-80s80 35.8 80 80v80h-32c-15.6 0-30.7-5.1-43.2-14.4L376 280c-20.8-15.6-46-24-72-24zm128 128h28.4c-14.6 64.1-71.9 112-140.4 112-47.9 0-78.6-20-107-42.7-3.5-2.8-7.2-5.8-10.9-8.9-2-1.6-4-3.3-6-4.9 55.3-5.5 99.6-48.6 106.9-103.4h1.1c15.6 0 30.7 5.1 43.2 14.4L360 328c20.8 15.6 46 24 72 24"})
);

export default LanStomachRegular;
