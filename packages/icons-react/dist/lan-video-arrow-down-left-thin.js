import React from 'react';

export const LanVideoArrowDownLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM96 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm456 336c13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8L464 172v20l83.2-62.4c1.4-1 3.1-1.6 4.8-1.6 4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8-1.7 0-3.4-.6-4.8-1.6L464 320v20l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8m-416-48h128c4.4 0 8-3.6 8-8s-3.6-8-8-8H155.3l162.3-162.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L144 324.7V216c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8"})
);

export default LanVideoArrowDownLeftThin;
