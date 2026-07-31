import React from 'react';

export const LanFolderPlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h138.7c10.4 0 20.5 3.4 28.8 9.6l38.4 28.8c8.3 6.2 18.4 9.6 28.8 9.6H448c26.5 0 48 21.5 48 48zM64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m192-272c-4.4 0-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-72c0-4.4-3.6-8-8-8"})
);

export default LanFolderPlusThin;
