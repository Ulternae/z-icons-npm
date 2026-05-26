import React from 'react';

export const LanDialMaxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-17 241 77.4 77.4c-43.4 27.8-101.7 22.8-139.6-15.1-43.7-43.7-43.7-114.7 0-158.4s114.7-43.7 158.4 0c37.9 37.9 43 96.2 15.1 139.6L305 271c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zm130.1 96.2a160 160 0 1 0-226.2-226.3 160 160 0 1 0 226.2 226.2zM576 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanDialMaxRegular;
