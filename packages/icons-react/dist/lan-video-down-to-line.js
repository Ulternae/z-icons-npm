import React from 'react';

export const LanVideoDownToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 512c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zm336-256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32zm-224 64h38.4l-35 58.3c-2.2 3.7-3.4 8-3.4 12.3v1.4c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-1.4c0-4.3-1.2-8.6-3.4-12.3l-35-58.3H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v192c0 35.3 28.7 64 64 64m37.3 64 38.4-64h40.6l38.4 64z"})
);

export default LanVideoDownToLine;
