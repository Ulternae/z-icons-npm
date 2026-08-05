import React from 'react';

export function LanDiagramSankey({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 96c-5 0-9.8 2.4-12.8 6.4l-76.8 102.4c-9.1 12.1-23.3 19.2-38.4 19.2H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h208c5 0 9.8-2.4 12.8-6.4l76.8-102.4C322.7 71.1 336.9 64 352 64h176c8.8 0 16 7.2 16 16s-7.2 16-16 16zM206.5 320l68.6 89.7c3 4 7.7 6.3 12.7 6.3H528c8.8 0 16 7.2 16 16s-7.2 16-16 16H287.8c-15 0-29-7-38.1-18.8L166.2 320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h162.5l2.2-1.7 1.3 1.7h346c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
  );
}

export default LanDiagramSankey;
