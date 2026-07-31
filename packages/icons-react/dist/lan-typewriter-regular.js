import React from 'react';

export const LanTypewriterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 64c0-8.8 7.2-16 16-16h151.4c4.2 0 8.3 1.7 11.3 4.7l40.6 40.6c3 3 4.7 7.1 4.7 11.3V144h48v-39.4c0-17-6.7-33.3-18.7-45.3l-40.6-40.6C312.7 6.7 296.4 0 279.4 0H128C92.7 0 64 28.7 64 64v80h48zM0 224v32c0 17.7 14.3 32 32 32v160c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V288c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6 3.4-22.6 9.4l-13.3 13.3c-6 6-14.1 9.4-22.6 9.4h-69.5c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H32c-17.7 0-32 14.3-32 32m80 224V288h288v160c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16m64-128a24 24 0 1 0 0 48 24 24 0 1 0 0-48m56 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m104-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-144 88a24 24 0 1 0 48 0 24 24 0 1 0-48 0m104-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanTypewriterRegular;
