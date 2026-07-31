import React from 'react';

export const CoreUtensilsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0v128h32V0h64v128h32V0h64v128c0 59.6-40.8 109.8-96 124v260H96V252C40.8 237.8 0 187.6 0 128V0zm384 10.9C468 3.8 489.6 0 512 0v512h-64V352h-64c-35.3 0-64-28.7-64-64v-96c0-83.6 53.4-154.7 128-181.1"})
);

export default CoreUtensilsSolid;
