import React from 'react';

export const LanBan = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m402.7 425.3-316-316C52.6 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224 56.1 0 107.4-20.6 146.7-54.7m22.6-22.6C459.4 363.4 480 312.1 480 256c0-123.7-100.3-224-224-224-56.1 0-107.4 20.6-146.7 54.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanBan;
