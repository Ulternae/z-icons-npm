import React from 'react';

export const LanFaceLyingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M388.9 416c-36 30-82.4 48-132.9 48-114.9 0-208-93.1-208-208S141.1 48 256 48c105.2 0 192.1 78.1 206.1 179.4-7-2.2-14.4-3.4-22.1-3.4H288c-13.3 0-24 10.7-24 24s10.7 24 24 24h152c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c39.8 0 72-32.2 72-72 0-4.7-.5-9.3-1.3-13.8.9-8.6 1.3-17.3 1.3-26.2C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c80.8 0 152.9-37.5 199.9-96H389zM208 176a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M216 384h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-30.9 0-56 25.1-56 56 0 13.3 10.7 24 24 24s24-10.7 24-24c0-4.4 3.6-8 8-8"})
);

export default LanFaceLyingRegular;
