import React from 'react';

export const LanTrainSubwayTunnelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48C141.1 48 48 141.1 48 256v232c0 13.3-10.7 24-24 24S0 501.3 0 488V256C0 114.6 114.6 0 256 0s256 114.6 256 256v232c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-114.9-93.1-208-208-208m24 128v80h72v-48c0-17.7-14.3-32-32-32zm-48 0h-40c-17.7 0-32 14.3-32 32v48h72zm-72 128v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64zm-48-96c0-44.2 35.8-80 80-80h128c44.2 0 80 35.8 80 80v160c0 27.7-14.1 52.2-35.5 66.5L401 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-57-57H202l-57 57c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l36.5-36.5C126.1 420.2 112 395.7 112 368zm64 144a24 24 0 1 1 48 0 24 24 0 1 1-48 0m136-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanTrainSubwayTunnelRegular;
