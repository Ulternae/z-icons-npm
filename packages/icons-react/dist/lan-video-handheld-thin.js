import React from 'react';

export const LanVideoHandheldThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 104c0-30.9 25.1-56 56-56h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-39.8 0-72 32.2-72 72v56c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H112zm-8 72h248c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48zm433.6 283.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V200c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8L464 236v20l83.2-62.4c1.4-1 3.1-1.6 4.8-1.6 4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8-1.7 0-3.4-.6-4.8-1.6L464 384v20zM96 248c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8"})
);

export default LanVideoHandheldThin;
