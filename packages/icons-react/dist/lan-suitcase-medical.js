import React from 'react';

export const LanSuitcaseMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 48v48h128V48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m-32 48V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v48h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm176 32H128v320h256V128zm80 0v320h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zM96 448V128H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32zm112-224c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16zm64 112v-24c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanSuitcaseMedical;
