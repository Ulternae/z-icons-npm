import React from 'react';

export const LanTablePivot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 64v96h256V96c0-17.7-14.3-32-32-32zm-16-32h240c35.3 0 64 28.7 64 64v114c-10.5-2.7-21.5-2.7-32 0v-18H224v256h18c-2.7 10.5-2.7 21.5 0 32H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM96 160h96V64h-64c-17.7 0-32 14.3-32 32zm0 32v224c0 17.7 14.3 32 32 32h64V192zm340.7 116.7 48-48c6.2-6.2 16.4-6.2 22.6 0l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 310.6V416c0 35.3-28.7 64-64 64H342.6l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L342.6 448H448c17.7 0 32-14.3 32-32V310.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6"})
);

export default LanTablePivot;
