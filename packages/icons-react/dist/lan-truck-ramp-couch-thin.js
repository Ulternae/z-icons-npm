import React from 'react';

export const LanTruckRampCouchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c-35.3 0-64 28.7-64 64v306L5.7 496.3c-4.2 1.3-6.6 5.7-5.4 10s5.7 6.6 10 5.4L329.2 416h71.2c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88-39.4-88-88-88c-40.3 0-74.2 27.1-84.7 64H336V96c0-26.5 21.5-48 48-48h192V32zm32 392a72 72 0 1 1 144 0 72 72 0 1 1-144 0M70.9 184.4c-33.8 10.3-52.8 46.1-42.5 79.9l32.7 107.1 4.7 15.3c5.2 16.9 23.1 26.4 40 21.2L272 357.1v-16.7l-170.8 52.2c-8.5 2.6-17.4-2.2-20-10.6-1.2-3.8-8.2-26.8-21.1-68.9-5.2-16.9 4.3-34.8 21.2-40s34.8 4.3 40 21.2l4.7 15.3c1.3 4.2 5.8 6.6 10 5.3l136-41.6v-16.7l-133 40.7-2.3-7.7c-7.8-25.4-34.6-39.6-59.9-31.9-11.8 3.6-21.1 11.3-27 21l-5.9-19.3c-7.8-25.4 6.5-52.2 31.9-59.9l196.4-60v-16.7L71.1 184.3z"})
);

export default LanTruckRampCouchThin;
