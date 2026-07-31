import React from 'react';

export const LanCloudCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 32c55.4 0 103.5 31.3 127.6 77.1C381.8 100.8 398.4 96 416 96c53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7C545.5 256 576 300.4 576 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-63.4 41-117.2 97.9-136.5C96.6 191.9 96 184 96 176c0-79.5 64.5-144 144-144m138.9 164.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8l102.3-140.9c7.8-10.7 5.4-25.7-5.3-33.5"})
);

export default LanCloudCheckSolid;
