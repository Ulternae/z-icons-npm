import React from 'react';

export const LanStaplerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 368h376v96H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h552c26.5 0 48-21.5 48-48V315.3c0-36.4-20.5-69.6-53.1-85.9l-326.2-163C236.6 54.3 209.9 48 182.9 48c-54.7 0-106.2 25.8-139.1 69.6l-35.2 47C3 172 0 181 0 190.4c0 19.7 13.5 37 32.6 41.8L48 236v108c0 13.3 10.7 24 24 24m552 40v24c0 17.7-14.3 32-32 32H464V336c0-7.3-5-13.7-12.1-15.5L36.5 216.6c-12.1-3-20.5-13.8-20.5-26.3 0-5.9 1.9-11.6 5.4-16.3l35.2-47c29.8-39.8 76.6-63.2 126.3-63.2 24.5 0 48.7 5.7 70.6 16.7l326.3 163.3c27.1 13.5 44.2 41.2 44.2 71.5zm-176-72v16H72c-4.4 0-8-3.6-8-8V240z"})
);

export default LanStaplerThin;
