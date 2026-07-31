import React from 'react';

export const LanFlaskRoundPoisonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 16h24v129.4C45.9 175.7 0 242.5 0 320c0 106 86 192 192 192s192-86 192-192c0-77.5-45.9-144.3-112-174.6V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8s3.6 8 8 8m40 134.6V16h128v134.6c0 3.2 1.9 6.1 4.9 7.4 63 26.8 107.1 89.3 107.1 162 0 97.2-78.8 176-176 176S16 417.2 16 320c0-72.7 44.1-135.2 107.1-162 3-1.3 4.9-4.2 4.9-7.4m119.8 234.5-7.8 4.7v26.3h-96v-26.3l-7.8-4.7c-25.1-15-40.2-39-40.2-65.1 0-42 40.6-80 96-80s96 38 96 80c0 26-15.1 50.1-40.2 65.1M256 416v-17.2c29-17.3 48-46.2 48-78.8 0-53-50.1-96-112-96S80 267 80 320c0 32.6 19 61.4 48 78.8V416c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16m-104-80a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanFlaskRoundPoisonThin;
