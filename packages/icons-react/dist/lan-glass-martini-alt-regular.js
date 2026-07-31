import React from 'react';

export const LanGlassMartiniAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M1.8 46.8C5.5 37.8 14.3 32 24 32h464c9.7 0 18.5 5.8 22.2 14.8s1.6 19.3-5.2 26.2L280 298v166.1h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h80V298L7 73C.2 66.1-1.9 55.8 1.8 46.8M177.9 176l78.1 78.1 78.1-78.1H178zm-48-48H382l48-48H81.9z"})
);

export default LanGlassMartiniAltRegular;
