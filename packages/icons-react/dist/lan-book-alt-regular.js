import React from 'react';

export const LanBookAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 0C39.4 0 0 39.4 0 88v344c0 44.2 35.8 80 80 80h344c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-76.1c19.3-12.9 32-34.9 32-59.9V72c0-39.8-32.2-72-72-72zm280 400v64H80c-17.7 0-32-14.3-32-32s14.3-32 32-32zM80 352c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40h288c13.3 0 24 10.7 24 24v256c0 13.3-10.7 24-24 24z"})
);

export default LanBookAltRegular;
