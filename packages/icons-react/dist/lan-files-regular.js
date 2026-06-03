import React from 'react';

export const LanFilesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48v72c0 39.8 32.2 72 72 72h72v192c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm48 3.9 92.1 92.1H328c-13.3 0-24-10.7-24-24zM160 0c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V147.9c0-12.7-5.1-24.9-14.1-33.9l-99.8-99.9c-9-9-21.2-14.1-33.9-14.1zM24 96c-13.3 0-24 10.7-24 24v360c0 35.3 28.7 64 64 64h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16V120c0-13.3-10.7-24-24-24"})
);

export default LanFilesRegular;
