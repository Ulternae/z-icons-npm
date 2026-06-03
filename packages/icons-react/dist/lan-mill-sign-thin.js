import React from 'react';

export const LanMillSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -7.965 384 527.93',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M295.4 3c1.7-4.1-.3-8.8-4.4-10.4s-8.8.3-10.4 4.4l-45.4 111.7c-19.2 10.8-34.5 27.7-43.2 48.1-15.3-35.7-50.7-60.7-92-60.7-35.2 0-66.2 18.2-84 45.7V104c0-4.4-3.6-8-8-8s-8 3.6-8 8v320c0 4.4 3.6 8 8 8s8-3.6 8-8V196c0-46.4 37.6-84 84-84s84 37.6 84 84v38.7L72.6 509c-1.7 4.1.3 8.8 4.4 10.4s8.8-.3 10.4-4.4L184 277.3V424c0 4.4 3.6 8 8 8s8-3.6 8-8V237.9l47.8-117.7c11-5.2 23.2-8.2 36.2-8.2 46.4 0 84 37.6 84 84v228c0 4.4 3.6 8 8 8s8-3.6 8-8V196c0-55.2-44.8-100-100-100-9.7 0-19.1 1.4-28 4zm-72 134.9L200 195.4c.2-22.3 9-42.5 23.3-57.5z"})
);

export default LanMillSignThin;
