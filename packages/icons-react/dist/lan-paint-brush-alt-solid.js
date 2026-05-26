import React from 'react';

export const LanPaintBrushAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M557.3 18.7c25 25 25 65.5 0 90.5L325 341.5c-16.2-41.3-49.2-74.3-90.5-90.5L466.7 18.7c25-25 65.5-25 90.5 0zM288 400c0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4.8c17.6 0 29.6-18.9 27.8-36.4-.4-3.8-.6-7.7-.6-11.6 0-61.9 50.1-112 112-112s112 50.1 112 112"})
);

export default LanPaintBrushAltSolid;
