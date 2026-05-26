import React from 'react';

export const LanDirectionLeftRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M414.5 114c8.8-3.8 19-2 26 4.5l128 120c4.8 4.5 7.6 10.9 7.6 17.5s-2.7 13-7.6 17.5l-128 120c-7 6.5-17.2 8.3-26 4.5S400 385.6 400 376v-48H176v48c0 9.6-5.7 18.2-14.5 22s-19 2-26-4.5l-128-120C2.7 269 0 262.6 0 256s2.7-13 7.6-17.5l128-120c7-6.5 17.2-8.3 26-4.5s14.4 12.4 14.4 22v48h224v-48c0-9.6 5.7-18.2 14.5-22m33.5 77.4V208c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H152c-13.3 0-24-10.7-24-24v-16.6L59.1 256l68.9 64.6V304c0-6.4 2.5-12.5 7-17s10.6-7 17-7h272c13.3 0 24 10.7 24 24v16.6l68.9-64.6z"})
);

export default LanDirectionLeftRightRegular;
