import React from 'react';

export const LanDumbbellRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 64c29.8 0 54.8 20.4 61.9 48H536c39.8 0 72 32.2 72 72v48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v48c0 39.8-32.2 72-72 72h-10.1c-7.1 27.6-32.1 48-61.9 48-35.3 0-64-28.7-64-64V280H240v104c0 35.3-28.7 64-64 64-29.8 0-54.8-20.4-61.9-48H104c-39.8 0-72-32.2-72-72v-48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-48c0-39.8 32.2-72 72-72h10.1c7.1-27.6 32.1-48 61.9-48 35.3 0 64 28.7 64 64v104h160V128c0-35.3 28.7-64 64-64m-288 48c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16m288 0c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16m-360 48c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h8V160zm424 192h8c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24h-8z"})
);

export default LanDumbbellRegular;
