import React from 'react';

export function LanCalendarNoteRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 24c0-13.3-10.7-24-24-24S96 10.7 96 24v40H64C28.7 64 0 92.7 0 128v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-32V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H144zm184 88h56c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM96 248c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanCalendarNoteRegular;
