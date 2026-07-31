import React from 'react';

export const MinaLayersTwoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12.305 5.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"}), React.createElement("path", {"d":"M3.305 13.315a.75.75 0 1 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 1 0-.61-1.37L12 17.179z"})
);

export default MinaLayersTwoSolid;
