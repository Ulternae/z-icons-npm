import React from 'react';

export const LanSkullCowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M584.4 1.9c-6.8 3.7-10 11.8-7.5 19.1L588 54.5c2.5 7.5 3.4 15.4 2.6 23.2-2.9 28.6-26.9 50.3-55.6 50.3h-23v96c70.8 0 128-57.9 128-128.5 0-29-9.9-57.4-28-80.1L604.5 6c-4.8-6.1-13.3-7.8-20.1-4.1M63.2 21.1c2.5-7.4-.7-15.4-7.5-19.1S40.3 0 35.5 6L28 15.3C9.9 38 0 66.4 0 95.5 0 166.1 57.2 224 128 224v-96h-23c-28.7 0-52.7-21.7-55.6-50.3-.8-7.8.1-15.8 2.6-23.2zM240 96c-44.2 0-80 35.8-80 80v112c0 37 25.2 68.2 59.3 77.3l27.6 110.3c5.3 21.4 24.5 36.4 46.6 36.4h53c22 0 41.2-15 46.6-36.4l27.6-110.3C454.8 356.2 480 325 480 288V176c0-44.2-35.8-80-80-80zm-16 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanSkullCowSolid;
