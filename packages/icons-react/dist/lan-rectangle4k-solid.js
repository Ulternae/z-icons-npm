import React from 'react';

export const LanRectangle4kSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 32c-13.3 0-24 10.7-24 24v48c0 30.9 25.1 56 56 56h40v40c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-40c-4.4 0-8-3.6-8-8v-48c0-13.3-10.7-24-24-24m176 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c26.5 0 48 21.5 48 48 0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.7-12.6-54.4-32.5-72 19.9-17.6 32.5-43.3 32.5-72 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 26.5-21.5 48-48 48v-48c0-13.3-10.7-24-24-24"})
);

export default LanRectangle4kSolid;
