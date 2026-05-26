import React from 'react';

export const LanTableColumnsAddAfter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64h-32c0-17.7-14.3-32-32-32H304v384h144c16.6 0 30.2-12.6 31.8-28.7l.2-3.3h32c0 35.3-28.7 64-64 64H128l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L64 416V96c0-35.3 28.7-64 64-64zM128 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h144V64zm352 104c8.8 0 16 7.2 16 16v56h56c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56v56c0 8.8-7.2 16-16 16s-16-7.2-16-16v-56h-56c-8.8 0-16-7.2-16-16s7.2-16 16-16h56v-56c0-8.8 7.2-16 16-16"})
);

export default LanTableColumnsAddAfter;
