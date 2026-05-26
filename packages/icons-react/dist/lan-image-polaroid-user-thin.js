import React from 'react';

export const LanImagePolaroidUserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64H16zm318.4-80H432V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v240h97.6c7.4-36.5 39.7-64 78.4-64h64c38.7 0 71 27.5 78.4 64M130 336h188c-7.1-27.6-32.2-48-62-48h-64c-29.8 0-54.9 20.4-62 48M448 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-176 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanImagePolaroidUserThin;
