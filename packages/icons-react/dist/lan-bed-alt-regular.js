import React from 'react';

export const LanBedAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-35.3 0-64 28.7-64 64v148.1C12.5 260.3 0 284.7 0 312v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h416v40c0 13.3 10.7 24 24 24s24-10.7 24-24V312c0-27.3-12.5-51.7-32-67.9V96c0-35.3-28.7-64-64-64zm304 192h-96c-17.7 0-32-14.3-32-32v-16c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32m-192 0h-96c-17.7 0-32-14.3-32-32v-16c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32m256 88v56H48v-56c0-22.1 17.9-40 40-40h336c22.1 0 40 17.9 40 40"})
);

export default LanBedAltRegular;
