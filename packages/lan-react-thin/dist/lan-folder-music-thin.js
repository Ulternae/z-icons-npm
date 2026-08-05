import React from 'react';

export function LanFolderMusicThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 432H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h138.7c10.4 0 20.5 3.4 28.8 9.6l38.4 28.8c8.3 6.2 18.4 9.6 28.8 9.6H448c26.5 0 48 21.5 48 48v240c0 26.5-21.5 48-48 48M64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m224-272v100.3c-11.7-12.5-28.9-20.3-48-20.3-35.3 0-64 26.9-64 60s28.7 60 64 60 63.9-26.8 64-59.8V176h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24c-8.8 0-16 7.2-16 16m-48 96c27.5 0 48 20.7 48 44s-20.5 44-48 44-48-20.7-48-44 20.5-44 48-44"})
  );
}

export default LanFolderMusicThin;
