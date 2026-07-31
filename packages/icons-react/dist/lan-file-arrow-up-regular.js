import React from 'react';

export const LanFileArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm145 247c-9.4-9.4-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23V408c0 13.3 10.7 24 24 24s24-10.7 24-24v-86.1l23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64z"})
);

export default LanFileArrowUpRegular;
