import React from 'react';

export function LanSquareMalaysianRinggitThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm72 64h60c33.1 0 60 26.9 60 60 0 30-22 54.9-50.8 59.3l33.8 60.8c2.1 3.9.8 8.7-3.1 10.9s-8.7.8-10.9-3.1L123.3 280H80v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m60 104c24.3 0 44-19.7 44-44s-19.7-44-44-44H80v88zm100 88c-4.4 0-8-3.6-8-8V168c0-3.4 2.1-6.4 5.3-7.5s6.7-.1 8.9 2.5l65.8 80.4 65.8-80.4c2.1-2.6 5.7-3.6 8.9-2.5s5.3 4.2 5.3 7.5v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V190.4l-57.8 70.7c-1.5 1.9-3.8 2.9-6.2 2.9s-4.7-1.1-6.2-2.9L240 190.4V344c0 4.4-3.6 8-8 8"})
  );
}

export default LanSquareMalaysianRinggitThin;
