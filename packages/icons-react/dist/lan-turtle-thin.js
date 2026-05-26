import React from 'react';

export const LanTurtleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48c-88.4 0-160 71.6-160 160v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-97.2 78.8-176 176-176s176 78.8 176 176v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-88.4-71.6-160-160-160m208 152c0-39.8 32.2-72 72-72 48.6 0 88 39.4 88 88v16c0 30.9-25.1 56-56 56h-34.2l-1 3c-18.5 55.5-70.5 93-129 93h-19.7v56c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-56h-64v56c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-56h-40c-22.1 0-40-17.9-40-40s17.9-40 40-40h328c26.5 0 48-21.5 48-48v-56zM240 368h16v72c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-72h35.7c51.7 0 97.5-33.1 113.8-82.1l2.8-8.5c1.1-3.3 4.1-5.5 7.6-5.5h40c22.1 0 40-17.9 40-40v-16c0-39.8-32.2-72-72-72-30.9 0-56 25.1-56 56v56c0 35.3-28.7 64-64 64L40 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v72c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-72zm256-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanTurtleThin;
