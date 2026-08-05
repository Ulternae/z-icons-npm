import React from 'react';

export function LanTvMusic({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 464c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16m224-384h-24c-13.3 0-24 10.7-24 24v72c-9.4-5.1-20.3-8-32-8-35.3 0-64 26.9-64 60s28.7 60 64 60 64-26.9 64-60c0-1.4 0-2.7-.1-4.1l.1.1V144h16c8.8 0 16-7.2 16-16s-7.2-16-16-16m-80 176c-19.6 0-32-14.5-32-28s12.4-28 32-28 32 14.5 32 28-12.3 28-32 28"})
  );
}

export default LanTvMusic;
