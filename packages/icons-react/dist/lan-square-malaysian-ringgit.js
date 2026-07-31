import React from 'react';

export const LanSquareMalaysianRinggit = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 64h50.7c35.3 0 64 28.7 64 64 0 27.8-17.8 51.5-42.6 60.3l22.3 44.5c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2l-27.6-55.2H112v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-160c0-8.8 7.2-16 16-16zm50.7 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H112v64zm93.3 96c-8.8 0-16-7.2-16-16V176c0-6.8 4.3-12.8 10.7-15.1s13.5-.2 17.8 5.1l51.5 64.4 51.5-64.4c4.2-5.3 11.4-7.4 17.8-5.1S384 169.2 384 176v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.6L316.5 266c-3 3.8-7.6 6-12.5 6s-9.5-2.2-12.5-6L256 221.6V336c0 8.8-7.2 16-16 16"})
);

export default LanSquareMalaysianRinggit;
