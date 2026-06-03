import React from 'react';

export const LanCloudSnowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c53 0 96 43 96 96s-43 96-96 96zm0 72v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H96v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16H32c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-16c0-13.3 10.7-24 24-24s24 10.7 24 24m184 32v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-16c0-13.3 10.7-24 24-24s24 10.7 24 24m160-56c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-16c0-13.3 10.7-24 24-24"})
);

export default LanCloudSnowSolid;
