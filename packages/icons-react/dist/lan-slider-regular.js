import React from 'react';

export const LanSliderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 144c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm-32-48c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-72h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-72c0-35.3-28.7-64-64-64zM0 256c0 13.3 10.7 24 24 24h216v-48H24c-13.3 0-24 10.7-24 24"})
);

export default LanSliderRegular;
