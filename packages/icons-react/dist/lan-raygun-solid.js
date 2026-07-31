import React from 'react';

export const LanRaygunSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 64h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v240c0 13.3-10.7 24-24 24s-24-10.7-24-24v-.4l-99.4 198.8c-7.9 15.8-27.1 22.2-42.9 14.3l-80-40c-15.8-7.9-22.2-27.1-14.3-42.9l68.8-137.7H112C50.1 288 0 237.9 0 176c0-44.7 26.2-83.2 64-101.2V24.6C64 11 75 0 88.6 0c4.8 0 9.6 1.4 13.6 4.1zm200 0c13.3 0 24 10.7 24 24v56h60.9l77.1-30.9c4.9-2 10.5-1.4 14.9 1.6s7 7.9 7 13.2v96c0 5.3-2.6 10.3-7 13.2s-10 3.6-14.9 1.6l-77.1-30.9H416v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-176c0-13.3 10.7-24 24-24zM136 176a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanRaygunSolid;
