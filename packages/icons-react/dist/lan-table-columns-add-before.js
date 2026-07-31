import React from 'react';

export const LanTableColumnsAddBefore = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 32c-35.3 0-64 28.7-64 64h32c0-17.7 14.3-32 32-32h144v384H128c-16.6 0-30.2-12.6-31.8-28.7L96 416H64c0 35.3 28.7 64 64 64h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-35.3-28.7-64-64-64zm320 32c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H304V64zM96 168c-8.8 0-16 7.2-16 16v56H24c-8.8 0-16 7.2-16 16s7.2 16 16 16h56v56c0 8.8 7.2 16 16 16s16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16s-7.2-16-16-16h-56v-56c0-8.8-7.2-16-16-16"})
);

export default LanTableColumnsAddBefore;
