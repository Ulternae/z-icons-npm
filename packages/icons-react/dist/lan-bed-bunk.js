import React from 'react';

export const LanBedBunk = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 0c8.8 0 16 7.2 16 16v144h192V32c0-17.7 14.3-32 32-32h144c61.9 0 112 50.1 112 112v376c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40.3H32V488c0 8.8-7.2 16-16 16s-16-7.2-16-16V16C0 7.2 7.2 0 16 0m208 415.7V288c0-17.7 14.3-32 32-32h224v-64H32v223.7zM480 160v-48c0-44.2-35.8-80-80-80H256v128zm0 128H256v127.7h224zm-352 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m32-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanBedBunk;
