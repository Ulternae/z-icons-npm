import React from 'react';

export const LanSquareBahtRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 72c-8.8 0-16 7.2-16 16v16h-45.7c-14.5 0-26.3 11.8-26.3 26.3v185.1c0 15.8 12.8 28.6 28.6 28.6H208v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h24c39.8 0 72-32.2 72-72 0-23-10.8-43.5-27.6-56.7C315.8 236 320 222.5 320 208c0-39.8-32.2-72-72-72h-8v-16c0-8.8-7.2-16-16-16m-16 80v48h-24v-48zm32 48v-48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24zm-32 48v48h-24v-48zm32 48v-48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
);

export default LanSquareBahtRegular;
