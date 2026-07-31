import React from 'react';

export const LanWindowFrameRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 64v400h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64M80 232h120V48H96c-8.8 0-16 7.2-16 16zm120 48H80v184h120zm48 0v184h120V280zm0-48h120V64c0-8.8-7.2-16-16-16H248z"})
);

export default LanWindowFrameRegular;
