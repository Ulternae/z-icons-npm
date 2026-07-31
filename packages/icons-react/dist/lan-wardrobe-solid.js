import React from 'react';

export const LanWardrobeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 0c17.7 0 32 14.3 32 32 0 16.6-12.6 30.2-28.7 31.8l-3.3.2v416c0 17.7-14.3 32-32 32s-32-14.3-32-32H280V64h-48v416H96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64l-3.3-.2C12.6 62.2 0 48.6 0 32 0 14.3 14.3 0 32 0zM168 192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24m176 0c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24"})
);

export default LanWardrobeSolid;
