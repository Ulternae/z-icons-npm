import React from 'react';

export const LanDialMedHighRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-79.2 144.8c37.9-37.9 96.2-43 139.6-15.1L271 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l77.4-77.4c27.8 43.4 22.8 101.7-15.1 139.6-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4zm192.3-33.9a160 160 0 1 0-226.2 226.2 160 160 0 1 0 226.2-226.2M576 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanDialMedHighRegular;
