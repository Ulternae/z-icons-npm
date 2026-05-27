import React from 'react';

export const CoreUtensils = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0v128c0 35.3 28.7 64 64 64s64-28.7 64-64V0h64v128c0 59.6-40.8 109.8-96 124v260H96V252C40.8 237.8 0 187.6 0 128V0zm96 0v128H96V0zm288 10.9C468 3.8 489.6 0 512 0v512h-64V352h-64c-35.3 0-64-28.7-64-64v-96c0-83.6 53.4-154.7 128-181.1m0 229.1V81.1c-38.3 22.1-64 63.5-64 110.9v96h64z"})
);

export default CoreUtensils;
