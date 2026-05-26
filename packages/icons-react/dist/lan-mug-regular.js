import React from 'react';

export const LanMugRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V112H112zM64 96c0-17.7 14.3-32 32-32h360c66.3 0 120 53.7 120 120s-53.7 120-120 120h-8v48c0 53-43 96-96 96H160c-53 0-96-43-96-96zm384 160h8c39.8 0 72-32.2 72-72s-32.2-72-72-72h-8z"})
);

export default LanMugRegular;
