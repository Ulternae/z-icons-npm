import React from 'react';

export const LanPaperclipVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 96C32 25.3 89.3-32 160-32S288 25.3 288 96v240c0 44.2-35.8 80-80 80s-80-35.8-80-80V112c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 26.5 21.5 48 48 48s48-21.5 48-48V96c0-53-43-96-96-96S64 43 64 96v272c0 79.5 64.5 144 144 144s144-64.5 144-144V144c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 97.2-78.8 176-176 176S32 465.2 32 368z"})
);

export default LanPaperclipVertical;
