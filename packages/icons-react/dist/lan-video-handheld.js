import React from 'react';

export const LanVideoHandheld = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 112c0-26.5 21.5-48 48-48h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-44.2 0-80 35.8-80 80v48c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H128zm-16 80h240c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32zm352 44v40l80-60v208l-80-60v40l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V200c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8zm-352 36c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16"})
);

export default LanVideoHandheld;
