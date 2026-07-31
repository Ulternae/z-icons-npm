import React from 'react';

export const LanBrowserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 80v96h352v-48c0-26.5-21.5-48-48-48zm-16 0H64c-26.5 0-48 21.5-48 48v48h112zM16 192v192c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V192zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanBrowserThin;
