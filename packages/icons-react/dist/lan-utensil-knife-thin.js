import React from 'react';

export const LanUtensilKnifeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M466.5 34.3c3.1-3.1 8.2-3.1 11.3 0l.8.8c46.9 46.9 46.9 122.8 0 169.7L332.4 351c-15.6 15.6-40.9 15.6-56.6 0l-51.7-51.7L13.8 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l464-464zM235.4 288l51.7 51.7c9.4 9.4 24.6 9.4 33.9 0l146.3-146.2c39-39 40.6-101.2 4.7-142.1z"})
);

export default LanUtensilKnifeThin;
