import React from 'react';

export function LanTvMusicThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 48c26.5 0 48 21.5 48 48v272c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v272c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 472c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m192-376v100.3c-11.7-12.5-28.9-20.3-48-20.3-35.3 0-64 26.9-64 60s28.7 60 64 60 63.9-26.8 64-59.8V128h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24c-8.8 0-16 7.2-16 16m-48 96c27.5 0 48 20.7 48 44s-20.5 44-48 44-48-20.7-48-44 20.5-44 48-44"})
  );
}

export default LanTvMusicThin;
