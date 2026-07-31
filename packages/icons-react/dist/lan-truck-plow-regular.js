import React from 'react';

export const LanTruckPlowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 80h91.8c5.6 0 10.8 2.9 13.7 7.8L344 192H176zm-48-16v128H48c-26.5 0-48 21.5-48 48v96c0 21.1 13.7 39.1 32.6 45.5-.4 3.4-.6 7-.6 10.5 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h96.7c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88v-80h48v80c0 48.6 39.4 88 88 88 13.3 0 24-10.7 24-24s-10.7-24-24-24c-22.1 0-40-17.9-40-40V184c0-22.1 17.9-40 40-40 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88 39.4-88 88v80h-48v-24c0-26.5-21.5-48-48-48h-32L322.5 63.1C311.1 43.8 290.2 32 267.8 32H160c-17.7 0-32 14.3-32 32m304 200v49.6c-12-6.1-25.6-9.6-40-9.6-27.3 0-51.7 12.5-67.9 32H187.9c-16.1-19.5-40.6-32-67.9-32s-51.7 12.5-67.9 32H48v-96h384zM80 392a40 40 0 1 1 80 0 40 40 0 1 1-80 0m312-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanTruckPlowRegular;
