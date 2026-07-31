import React from 'react';

export const LanCloudExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 32c55.4 0 103.5 31.3 127.6 77.1C381.8 100.8 398.4 96 416 96c53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7C545.5 256 576 300.4 576 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-63.4 41-117.2 97.9-136.5C96.6 191.9 96 184 96 176c0-79.5 64.5-144 144-144m48 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"})
);

export default LanCloudExclamationSolid;
