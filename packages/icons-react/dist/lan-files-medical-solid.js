import React from 'react';

export const LanFilesMedicalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 0c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C326.7 6.7 310.5 0 293.5 0zm128 58.5L389.5 160H312c-13.3 0-24-10.7-24-24zM24 96c-13.3 0-24 10.7-24 24v360c0 35.3 28.7 64 64 64h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16V120c0-13.3-10.7-24-24-24m216 120c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v40h40c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-40v40c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-40h-40c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h40z"})
);

export default LanFilesMedicalSolid;
