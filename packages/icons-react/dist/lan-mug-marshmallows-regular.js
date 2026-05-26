import React from 'react';

export const LanMugMarshmallowsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0h96c17.7 0 32 14.3 32 32v48H96V64c0-17.7 14.3-32 32-32h128c0-17.7 14.3-32 32-32M112 384c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V176H192v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-32zm336-208v144h8c39.8 0 72-32.2 72-72s-32.2-72-72-72zm0 192v16c0 53-43 96-96 96H160c-53 0-96-43-96-96V160c0-17.7 14.3-32 32-32h360c66.3 0 120 53.7 120 120s-53.7 120-120 120z"})
);

export default LanMugMarshmallowsRegular;
