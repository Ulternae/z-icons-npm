import React from 'react';

export const LanFolderArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h138.7c3.5 0 6.8 1.1 9.6 3.2l38.4 28.8c13.8 10.4 30.7 16 48 16H448c8.8 0 16 7.2 16 16zM64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m209-273c-9.4-9.4-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23V336c0 13.3 10.7 24 24 24s24-10.7 24-24v-86.1l23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64z"})
);

export default LanFolderArrowUpRegular;
