import React from 'react';

export function MinaLayersThreeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.305 3.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"}), React.createElement("path", {"d":"M3.305 11.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 15.179z"}), React.createElement("path", {"d":"M3.305 15.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 19.179z"})
  );
}

export default MinaLayersThreeSolid;
