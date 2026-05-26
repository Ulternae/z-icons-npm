import React from 'react';

export const LanVideoDownToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 528c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zm360-272c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48zm-240 64h38.4l-35 58.3c-2.2 3.7-3.4 8-3.4 12.3v1.4c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-1.4c0-4.3-1.2-8.6-3.4-12.3l-35-58.3H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v192c0 35.3 28.7 64 64 64m17.1 66.5L185 320h77.9l39.9 66.5c.7 1.2 1.1 2.7 1.1 4.1v1.4c0 4.4-3.6 8-8 8h-144c-4.4 0-8-3.6-8-8v-1.4c0-1.4.4-2.9 1.1-4.1z"})
);

export default LanVideoDownToLineThin;
