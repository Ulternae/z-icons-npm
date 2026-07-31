import React from 'react';

export const LanHexagonExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M383.8 16c25.8 0 49.7 13.8 62.5 36.2l96.2 168c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.2c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2L33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168C142.5 29.8 166.4 16 192.2 16zM288 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c1 12.6 11.4 22.3 24 22.3s23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"})
);

export default LanHexagonExclamationSolid;
