import React from 'react';

export const LanBarProgressFullThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m411.3 112-288 288h169.4L496 196.7V160c0-26.5-21.5-48-48-48zm-22.6 0H219.3L16 315.3V352c0 26.5 21.5 48 48 48h36.7zM16 292.7 196.7 112H64c-26.5 0-48 21.5-48 48zM315.3 400H448c26.5 0 48-21.5 48-48V219.3zM0 160c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanBarProgressFullThin;
