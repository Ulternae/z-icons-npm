import React from 'react';

export const LanSliderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 112c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zm-32-16c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-88h120c4.4 0 8-3.6 8-8s-3.6-8-8-8H448v-88c0-35.3-28.7-64-64-64zM0 256c0 4.4 3.6 8 8 8h232v-16H8c-4.4 0-8 3.6-8 8"})
);

export default LanSliderThin;
