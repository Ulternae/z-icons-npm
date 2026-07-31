import React from 'react';

export const LanBreadSlice = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 224c-17.7 0-32-14.3-32-32 0-39.1 22.3-70.6 63.7-93.9 42-23.6 100.2-36.5 160.3-36.5s118.3 12.9 160.3 36.5c41.4 23.3 63.7 54.8 63.7 93.9 0 17.7-14.3 32-32 32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V256c0-17.7-14.3-32-32-32m384 64v-32c35.3 0 64-28.7 64-64C512-24.5 0-24.5 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48z"})
);

export default LanBreadSlice;
