import React from 'react';

export const LanUndoAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 43.3V144h100.7zM24 176c-13.3 0-24-10.7-24-24V24C0 14.3 5.9 5.5 14.8 1.8S34.1.2 41 7l51.8 51.8c100.6-83.5 250-78.1 344.3 16.2 45.6 45.6 70.5 104.3 74.4 164 4 58.8-12.3 119.3-50.3 170.2-84.6 113.3-245 136.5-358.3 51.9-31.5-23.5-56.1-53-73.3-85.7-4.1-7.8-1.1-17.5 6.7-21.6s17.5-1.1 21.6 6.7c15 28.6 36.5 54.3 64.1 74.9 99.1 74 239.5 53.7 313.5-45.5 33.3-44.6 47.5-97.5 44-149-3.5-52.3-25.2-103.5-65.1-143.5-81.7-81.7-211-87.1-298.9-16.1L169 135c6.9 6.9 8.9 17.2 5.2 26.2S161.7 176 152 176z"})
);

export default LanUndoAlt;
