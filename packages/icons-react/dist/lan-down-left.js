import React from 'react';

export const LanDownLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64.2 416V150.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0L324.9 81.9c6.2-6.2 16.4-6.2 22.6 0l50.7 50.7c6.2 6.2 6.2 16.4 0 22.6L244.9 308.7c-6.2 6.2-6.2 16.4 0 22.6l84.7 84.7zm-32 8c0 13.3 10.7 24 24 24h273.4c28.5 0 42.8-34.5 22.6-54.6L278.9 320l142-142.1c18.7-18.7 18.7-49.1 0-67.9l-50.7-50.7c-18.7-18.7-49.1-18.7-67.9 0L160.2 201.4 86.9 128c-20.2-20.2-54.6-5.9-54.6 22.6V424z"})
);

export default LanDownLeft;
