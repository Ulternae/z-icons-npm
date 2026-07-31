import React from 'react';

export const LanCloudFogSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96h-1.6c1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28C288.5 24.3 251.1 0 208 0 146.1 0 96 50.1 96 112c0 7.1.7 14.1 1.9 20.8C59.6 145.4 32 181.5 32 224m480 168c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24M88 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h288c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCloudFogSolid;
