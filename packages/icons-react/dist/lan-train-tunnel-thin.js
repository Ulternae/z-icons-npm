import React from 'react';

export const LanTrainTunnelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16C123.5 16 16 123.5 16 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256C0 114.6 114.6 0 256 0s256 114.6 256 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-132.5-107.5-240-240-240m-64 128c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V208c0-35.3-28.7-64-64-64zm0-16h128c44.2 0 80 35.8 80 80v160c0 38.2-26.8 70.2-62.6 78.1l52.2 52.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-61.7-61.7H195.2l-61.7 61.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l52.2-52.2c-35.6-7.9-62.4-39.9-62.4-78.1V208c0-44.2 35.8-80 80-80m80 248a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-32-168c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"})
);

export default LanTrainTunnelThin;
