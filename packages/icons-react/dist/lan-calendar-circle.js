import React from 'react';

export const LanCalendarCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-144c8.8 0 16 7.2 16 16v16h96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-16c0-8.8 7.2-16 16-16m-16 64c-8.8 0-16 7.2-16 16v32h192v-32c0-8.8-7.2-16-16-16zm-16 160c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-80H160z"})
);

export default LanCalendarCircle;
