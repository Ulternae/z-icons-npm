import React from 'react';

export const LanGlassWhiskey = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v144H32zm0 176h384v96c0 53-43 96-96 96H128c-53 0-96-43-96-96zM48 32C21.5 32 0 53.5 0 80v272c0 70.7 57.3 128 128 128h192c70.7 0 128-57.3 128-128V80c0-26.5-21.5-48-48-48z"})
);

export default LanGlassWhiskey;
