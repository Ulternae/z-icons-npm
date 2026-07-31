import React from 'react';

export const MinaBriefcaseConveyorBelt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14.885 7.484h-5.77m5.77 0c0-4.649-5.77-4.642-5.77 0m5.77 0h3.461c.637 0 1.154.545 1.154 1.216v6.083c0 .672-.517 1.217-1.154 1.217H5.654c-.637 0-1.154-.545-1.154-1.217V8.7c0-.671.517-1.216 1.154-1.216h3.461M9 19l1 2m3-2 1 2m3-2 1 2m3-2H3m2 0 1 2"})
);

export default MinaBriefcaseConveyorBelt;
