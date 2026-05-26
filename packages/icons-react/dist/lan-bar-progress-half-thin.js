import React from 'react';

export const LanBarProgressHalfThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 112c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H264V112zm-244.7 0H248v124.7L84.7 400H64c-26.5 0-48-21.5-48-48v-52.7zm-22.6 0L16 276.7V160c0-26.5 21.5-48 48-48zm-73.4 288L248 259.3V400zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressHalfThin;
